import * as assert from "assert";

import { getBSU, getUniqueName, sleep } from "../utils";

describe("PageBlobClient", () => {
  const blobServiceClient = getBSU();
  let containerName: string = getUniqueName("container");
  let containerClient = blobServiceClient.createContainerClient(containerName);
  let blobName: string = getUniqueName("blob");
  let blobClient = containerClient.createBlobClient(blobName);
  let pageBlobClient = blobClient.createPageBlobClient();

  beforeEach(async () => {
    containerName = getUniqueName("container");
    containerClient = blobServiceClient.createContainerClient(containerName);
    await containerClient.create();
    blobName = getUniqueName("blob");
    blobClient = containerClient.createBlobClient(blobName);
    pageBlobClient = blobClient.createPageBlobClient();
  });

  afterEach(async () => {
    await containerClient.delete();
  });

  it("startCopyIncremental", async () => {
    await pageBlobClient.create(1024, {
      metadata: {
        sourcemeta: "val"
      }
    });
    await pageBlobClient.uploadPages("b".repeat(1024), 0, 1024);

    let snapshotResult = await pageBlobClient.createSnapshot();
    assert.ok(snapshotResult.snapshot);

    const destPageBlobClient = containerClient.createPageBlobClient(
      getUniqueName("page")
    );

    await containerClient.setAccessPolicy("container");

    await sleep(5 * 1000);

    let copySource = pageBlobClient.withSnapshot(snapshotResult.snapshot!).url;
    let copyResponse = await destPageBlobClient.startCopyIncremental(copySource);

    async function waitForCopy(retries = 0) {
      if (retries >= 30) {
        throw new Error("Check copy status exceed max retries counts");
      }

      switch (copyResponse.copyStatus) {
        case "success":
          return;
        case "aborted":
          throw new Error("Copy unexcepted aborted.");
        case "pending":
          await sleep(3000);
          copyResponse = await destPageBlobClient.getProperties();
          await waitForCopy(++retries);
          return;
        case "failed":
          throw new Error("Copy failed.");
        default:
          return;
      }
    }

    await waitForCopy();

    let listBlobResponse = await containerClient.listBlobFlatSegment(undefined, {
      include: ["copy", "snapshots"]
    });

    assert.equal(listBlobResponse.segment.blobItems.length, 4);

    await pageBlobClient.uploadPages("c".repeat(1024), 0, 1024);
    snapshotResult = await pageBlobClient.createSnapshot();
    assert.ok(snapshotResult.snapshot);
    copySource = pageBlobClient.withSnapshot(snapshotResult.snapshot!).url;
    copyResponse = await destPageBlobClient.startCopyIncremental(copySource);

    await waitForCopy();

    listBlobResponse = await containerClient.listBlobFlatSegment(undefined, {
      include: ["copy", "snapshots"]
    });

    assert.equal(listBlobResponse.segment.blobItems.length, 6);

    const pageBlobProperties = await destPageBlobClient.getProperties();
    assert.equal(pageBlobProperties.metadata!.sourcemeta, "val");
  });
});