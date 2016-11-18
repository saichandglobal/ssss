# Storage

## CephFS in hardware

This is our general plan and reasoning

* We are moving forward with the CephFS cluster in hardware.
* Our general architecture goes in the way of using
  * 12 cores processors
  * 2 sockets
  * 24 drives
    * 22 for Ceph storage
    * 2 for the OS as a raid
    * NVMe drive on the PCIe bus for Ceph Journal (as fast as it gets)
  * 40GB nic card for general networking
  * 1GB nic card for management
* To reduce blast radious we will have 4 independent clusters accessed through the sharding feature.
  * If one goes down we still have 3 left.
  * This is particularly useful to reduce load and improve recovery times.
  * This can be also useful to migrate CephFS data into BlueStore when it's stable and available.
* As a backup for git repos we will use GitLab GEO feature pushing into a secondary node hosted at Amazon with an EFS drive (we don't care if it's slow)
  * This makes Amazon DirectConnect a critical feature for our colo as we will need to have high bandwidth to it.
  * We will start backfilling this Amazon instance as soon as we finish draining CephFS, so when we are done we can start moving from Amazon to the colo.
* To prevent a total loss in the case of another MDS meltdown we will create snapshots periodically so we can recover (hourly, daily, whatever makes sense)
* We will push forward with the GEO feature to use an object storage, in which case we will use RADOS as the object storage to simplify our installation.


## CephFS in the cloud

** Don't do it. **

* Latencies will kill you.
* Random hosts going down at any time will double your workload.
* Network attached storage, as premium as it is, is shared.
* CephFS will lock when it can't write to the journal.

The good side:

* CephFS survives to things locking and injecting latencies remarkably well.

