---
title: Release Notes 0.10.0
sidebar_position: 991
---

# Uniffle Release 0.10.0

## Highlight

- GRPC_NETTY mode now is GA (that is enabled by default), better performance and less GC overhead
- Partition reassign for Spark now is GA to improve shuffle writing stability
- Partition split for Spark is introduced to improve huge partition shuffle writing speed
- Remote merge is supported for MapReduce and Tez
- Impressive shuffle write + read performance improvements by the overlapping compression/decompression
- Spark Uniffle UI is introduced for better observation

## ChangeLog
* [#1626] fix(server): Remove the meaningless eventOfUnderStorageManagers cache by @rickyma in https://github.com/apache/uniffle/pull/1627
* build(deps): bump h2 from 0.3.21 to 0.3.26 in /rust/experimental/server by @dependabot[bot] in https://github.com/apache/uniffle/pull/1625
* [#1596][FOLLOWUP] fix(netty): Send failed responses only when the channel is writable by @rickyma in https://github.com/apache/uniffle/pull/1641
* [#1459][FOLLOWUP] improvement(server): Print an error log when an event is dropped by @rickyma in https://github.com/apache/uniffle/pull/1643
* chore(rust): disable flaky test of test_ticket_manager by @zuston in https://github.com/apache/uniffle/pull/1637
* [#1634] fix(server): remove app folder if app is expired by @zuston in https://github.com/apache/uniffle/pull/1635
* [#1459][FOLLOWUP] fix(server): Fix the issue of log variable printing by @rickyma in https://github.com/apache/uniffle/pull/1648
* [#1645] feat(server): Add gauge metrics for reading localfile data by @rickyma in https://github.com/apache/uniffle/pull/1646
* [MINOR] Remove meaningless string concatenation by @rickyma in https://github.com/apache/uniffle/pull/1647
* [#1087] feat(spark): Support dynamic allocation for Gluten Uniffle by @summaryzb in https://github.com/apache/uniffle/pull/1649
* [#1629] fix(operator): ShuffleServer cannot be deleted even though there are no more application.  by @zhengchenyu in https://github.com/apache/uniffle/pull/1630
* [#1608][part-3] feat(spark3): support reading partition data from multiple reassignment servers by @zuston in https://github.com/apache/uniffle/pull/1615
* [#1607] docs: Performance report with partial TPC-DS(SF=40000) queries by @rickyma in https://github.com/apache/uniffle/pull/1650
* [#1655] Bump version to 0.10.0-SNAPSHOT by @EnricoMi in https://github.com/apache/uniffle/pull/1656
* [#1607][FOLLOWUP] docs(benchmark): Performance report with partial TPC-DS(SF=40000) queries by @rickyma in https://github.com/apache/uniffle/pull/1661
* [#1662] fix(test): Fix Netty related tests by @rickyma in https://github.com/apache/uniffle/pull/1663
* [#1664] improvement(docs): Update the descriptions and default values of outdated conf by @rickyma in https://github.com/apache/uniffle/pull/1665
* [#378][FOLLOWUP] fix(server): Fix huge_partition_num metric by @rickyma in https://github.com/apache/uniffle/pull/1669
* [#1341] fix(mr): Fix MR Combiner ArrayIndexOutOfBoundsException Bug. by @qijiale76 in https://github.com/apache/uniffle/pull/1666
* [#1585] feat(server): Support app-level block size statistics to report metrics by @leslizhang in https://github.com/apache/uniffle/pull/1593
* [MINOR] chore(rust): disable flaky test of local_store_test by @zuston in https://github.com/apache/uniffle/pull/1674
* [#1657] build: Add license information after version 0.9.0 by @jerqi in https://github.com/apache/uniffle/pull/1671
* [#1543] improvement(spark): Optimize shuffle reading when both sort and combine are used. by @qijiale76 in https://github.com/apache/uniffle/pull/1640
* [#1675] fix(test): Fix tests which may be flaky on different machines by @rickyma in https://github.com/apache/uniffle/pull/1676
* [#1682] feat(server): Introduce localfile isWritable metric by @zuston in https://github.com/apache/uniffle/pull/1683
* [#1608][part-5] feat(spark3): always use the available assignment by @zuston in https://github.com/apache/uniffle/pull/1652
* [#1678] fix(server): disk size leak on removing resources by AppPurgeEvent by @zuston in https://github.com/apache/uniffle/pull/1679
* [#1684] fix(server): use the diskSize obtained from periodic check to determine whether is writable by @xianjingfeng in https://github.com/apache/uniffle/pull/1685
* [#1680] improvement(server): Remove partial HDFS files that written by server self for expired apps by @xianjingfeng in https://github.com/apache/uniffle/pull/1681
* [#1686] feat(netty): Support pending tasks number metrics for Netty EventLoopGroup by @rickyma in https://github.com/apache/uniffle/pull/1687
* [#1538] feat(spark): report blockIds to spark driver optionally by @zuston in https://github.com/apache/uniffle/pull/1677
* [MINOR] docs: modify the default value of rss.coordinator.select.partition.strategy by @xianjingfeng in https://github.com/apache/uniffle/pull/1692
* [MINOR] fix(typo): Correct the removeShuffle method name by @rickyma in https://github.com/apache/uniffle/pull/1697
* [#1594] improvement(client):support generating larger block size during shuffle map task by spill partial partitions data by @leslizhang in https://github.com/apache/uniffle/pull/1670
* [#1703] improvement(server): Bump gRPC from 1.61.1 to 1.63.0 by @rickyma in https://github.com/apache/uniffle/pull/1704
* [#1701] improvement(Netty): Bump Netty from 4.1.106.Final to 4.1.109.Final by @rickyma in https://github.com/apache/uniffle/pull/1702
* [#1608][part-6] improvement(spark): verify the sent blocks count by @zuston in https://github.com/apache/uniffle/pull/1690
* [#1675][FOLLOWUP] fix(test): Fix flaky tests which may cause port conflicts by @rickyma in https://github.com/apache/uniffle/pull/1696
* [#1608][part-7] improvement(doc): add doc and optimize reassign config options by @zuston in https://github.com/apache/uniffle/pull/1693
* [#1709] feat(coordinator): Introduce pluggable ClientConfApplyManager for fetchClientConf rpc by @zuston in https://github.com/apache/uniffle/pull/1710
* [#1699] improvement: Upgrade from commons-collections:commons-collections:3.2.2 to org.apache.commons:commons-collections:4.4 by @rickyma in https://github.com/apache/uniffle/pull/1700
* [#1673] fix(K8S): Fix the deployment of stable version K8S cluster by @jerqi in https://github.com/apache/uniffle/pull/1694
* [#519][FOLLOWUP] Speed up ConcurrentHashMap#computeIfAbsent by @rickyma in https://github.com/apache/uniffle/pull/1719
* [#1721] fix(coordinator): classCastExpection of boolean->String with yaml style remote client conf by @zuston in https://github.com/apache/uniffle/pull/1722
* [MINOR] fix(docs): Update outdated config: rss.writer.send.check.timeout -> rss.client.send.check.timeout.ms by @rickyma in https://github.com/apache/uniffle/pull/1734
* [#1711] feat(server): Introduce the reconfigurable conf by @zuston in https://github.com/apache/uniffle/pull/1712
* [#1728] feat(server): Introduce disks timeout metrics by @rickyma in https://github.com/apache/uniffle/pull/1729
* [#1698] fix(test): Increase tests running memory for better stability by @rickyma in https://github.com/apache/uniffle/pull/1726
* [#1731] improvement(server): Bump gRPC from 1.63.0 to 1.64.0 by @rickyma in https://github.com/apache/uniffle/pull/1732
* [#1675][FOLLOWUP] fix(test): Fix various flaky tests by @rickyma in https://github.com/apache/uniffle/pull/1730
* [#1706] improvement: Upgrade the default NodeJS and npm versions of dashboard. by @yl09099 in https://github.com/apache/uniffle/pull/1707
* [MINOR] fix(server): Use warn log when unable to acquire memory by @rickyma in https://github.com/apache/uniffle/pull/1733
* [#1698][FOLLOWUP] fix(test): Increase stability of tests by @rickyma in https://github.com/apache/uniffle/pull/1739
* [#1711][FOLLOWUP] fix(server): Avoid outputing too much incorrect non-update logs by @zuston in https://github.com/apache/uniffle/pull/1737
* [#1149] fix: GC logs in JDK 11 do not include date and time stamps. by @qijiale76 in https://github.com/apache/uniffle/pull/1240
* [#1675][FOLLOWUP] fix(test): Explicitly close resources to avoid unexcepted behaviors by @rickyma in https://github.com/apache/uniffle/pull/1740
* [#1711][FOLLOWUP] feat(coordinator): refactor the reconfigurable conf by @zuston in https://github.com/apache/uniffle/pull/1741
* [#1743] fix: Add exception handling for thread pools by @rickyma in https://github.com/apache/uniffle/pull/1744
* [#1755] fix(spark): Avoid task failure of inconsistent record number by @zuston in https://github.com/apache/uniffle/pull/1756
* [#1757] feat(server): Add block number check on getting shuffle result by @zuston in https://github.com/apache/uniffle/pull/1758
* [#1711] feat(server): Make the health checker execution timeout reconfigurable by @zuston in https://github.com/apache/uniffle/pull/1754
* [MINOR] fix(dashboard): Display the registration time in 24-hour format by @rickyma in https://github.com/apache/uniffle/pull/1752
* [#1699][FOLLOWUP] fix(client): Add commons-collections4 dependencies in shaded clients by @rickyma in https://github.com/apache/uniffle/pull/1742
* [#1755][FOLLOWUP] fix(server): Incorrect request info to output too much logs by @zuston in https://github.com/apache/uniffle/pull/1760
* [#1764] fix(client): Fix timeout time unit for unregister requests by @EnricoMi in https://github.com/apache/uniffle/pull/1766
* [#1717] improvement: Flush a part of partitions if the shuffle size too big by @xianjingfeng in https://github.com/apache/uniffle/pull/1718
* [#1727] improvement(server): Introduce block num threshold for early buffer flush to mitigate GC issues by @rickyma in https://github.com/apache/uniffle/pull/1759
* [#1767] feat(netty): The client-side supports choosing Netty's ByteBufAllocator by @rickyma in https://github.com/apache/uniffle/pull/1768
* [#1608] improvement(spark3): Output more task level infos in driver side when reassigning on block sent failure by @zuston in https://github.com/apache/uniffle/pull/1771
* [#1608][part-6][FOLLOWUP] improvement(client): Check blockId num after blocks all sent by @zuston in https://github.com/apache/uniffle/pull/1761
* [#1770] improvement(server): Increase the InitiatingHeapOccupancyPercent value of G1 option to avoid frequent garbage collection by @rickyma in https://github.com/apache/uniffle/pull/1772
* [#1608] improvement(spark3): Output the reassign logs in client side by @zuston in https://github.com/apache/uniffle/pull/1776
* [#1765] improvement(client): Improve shuffle unregister timeouts by @EnricoMi in https://github.com/apache/uniffle/pull/1738
* [#1401][part-1] The dashboard supports multiple Coordinator links. by @yl09099 in https://github.com/apache/uniffle/pull/1449
* [#1773] improvement(client): Reduce chunkSize of gRPC Netty's PooledByteBufAllocator to reduce memory usage by @rickyma in https://github.com/apache/uniffle/pull/1775
* [#1579][part-1] fix(spark): Adjust reassigned time to ensure that all previous data is cleared for stage retry by @yl09099 in https://github.com/apache/uniffle/pull/1762
* [MINOR] fix(docs): Correct the example of decommission interface by @xianjingfeng in https://github.com/apache/uniffle/pull/1777
* [#1773] improvement(server): Reduce chunkSize of gRPC Netty's PooledByteBufAllocator to reduce memory usage by @rickyma in https://github.com/apache/uniffle/pull/1780
* [#1784] improvement(server): Skip retries for absent HDFS app directory to speed up resource removal by @xianjingfeng in https://github.com/apache/uniffle/pull/1785
* [MINOR] refactor: Reduce minor logs by @wForget in https://github.com/apache/uniffle/pull/1789
* [#1794] improvement(netty): TransportClientFactory should check whether handler is null when creating client by @rickyma in https://github.com/apache/uniffle/pull/1795
* [MINOR] refactor: Check debug enabled by @wForget in https://github.com/apache/uniffle/pull/1793
* [#1778] improvement(dashboard): Dashboard adds the ability to automatically format code. by @yl09099 in https://github.com/apache/uniffle/pull/1779
* [#1708] feat(server): support use skip list to store shuffleBuffer in memory by @xianjingfeng in https://github.com/apache/uniffle/pull/1763
* [#1807] improvement(server): Avoid repeating judgment of partition whether is huge by @xumanbu in https://github.com/apache/uniffle/pull/1808
* [#1799] improvement(spark): Rename shuffleManager rpc to reassignOnStageResubmit by @zuston in https://github.com/apache/uniffle/pull/1800
* [#1802] improvement(netty): Allow sharing Netty's memory allocators by @rickyma in https://github.com/apache/uniffle/pull/1803
* [#1791] feat(spark)(coordinator): Take more infos on get assignment to track app reassign/stageRetry by @zuston in https://github.com/apache/uniffle/pull/1792
* [#1608] feat(spark3): Ensure the compatiblity of reassign and stageRetry by @zuston in https://github.com/apache/uniffle/pull/1783
* [#1805][part-1] build: Support Scala 2.13 by @EnricoMi in https://github.com/apache/uniffle/pull/1806
* [#288] feat(operator): Supports mounting PVC for shuffleserver by @jerqi in https://github.com/apache/uniffle/pull/1813
* [#1811] improvement(netty): Print received Netty ByteBuf readable bytes in clients by @rickyma in https://github.com/apache/uniffle/pull/1812
* [#1787] feat(spark): Fine grained stage retry switch for fetch/write failure by @zuston in https://github.com/apache/uniffle/pull/1788
* [MINOR] fix: Add a missing bracket in log when getting shuffle index using Netty by @dingshun3016 in https://github.com/apache/uniffle/pull/1815
* [#1668] fix: Replace assertions with exception-throwing codes by @rickyma in https://github.com/apache/uniffle/pull/1804
* [#1818] fix(spark3): Avoid calling RssShuffleDataIterator.cleanup multiple times by @wForget in https://github.com/apache/uniffle/pull/1819
* [MINOR] fix(test): Use standard way to set storage basePath in `RepartitionWithHadoopHybridStorageRssTest` by @wForget in https://github.com/apache/uniffle/pull/1829
* [#1826] fix(build): Fix multiple '--without' options and correct Hadoop profile usage by @rickyma in https://github.com/apache/uniffle/pull/1827
* [#289] feat(operator): Support annotations by @jerqi in https://github.com/apache/uniffle/pull/1817
* [#1826][FOLLOWUP] fix(build): Revert incorrect shift statements deletion in build_distribution.sh by @rickyma in https://github.com/apache/uniffle/pull/1830
* [MINOR] improvement(test): Disable Spark UI for Spark integration tests by @wForget in https://github.com/apache/uniffle/pull/1831
* [#1824] feat(spark): Support map side combine of shuffle writer by @wForget in https://github.com/apache/uniffle/pull/1825
* [#1834] improvement(test): Upload failed integration test logs of GA by @wForget in https://github.com/apache/uniffle/pull/1835
* [MINOR] fix(dashboard): Correct RegistrationTime to HeartbeatTime by @maobaolong in https://github.com/apache/uniffle/pull/1850
* [#1809] fix(server): add block counter for SKIP_LIST buffer by @xianjingfeng in https://github.com/apache/uniffle/pull/1846
* [#1847] refactor: Remove capacity and related codes within AbstractShuffleBuffer by @maobaolong in https://github.com/apache/uniffle/pull/1853
* [MINOR] Improvement(dashboard): Support display human-readable time format for app page by @maobaolong in https://github.com/apache/uniffle/pull/1851
* [#1751] improvement: support gluten again by @xianjingfeng in https://github.com/apache/uniffle/pull/1857
* [#1860] feat(CLI/Coordinator/Dashboard): Add Reg time to AppInfo and Application by @maobaolong in https://github.com/apache/uniffle/pull/1861
* [#1854] feat(script): Support launching coordinator/shuffle-server/dashboard using IntelliJ IDEA by @maobaolong in https://github.com/apache/uniffle/pull/1855
* [#1398] fix(mr)(tez): Make attempId computable and move it to taskAttemptId in BlockId layout. by @qijiale76 in https://github.com/apache/uniffle/pull/1418
* [#1401] improvement(dashboard): Remove the ugly underline in the shuffle server page by @yl09099 in https://github.com/apache/uniffle/pull/1871
* [#1873] feat(server): Add audit log support for write and delete operations by @rickyma in https://github.com/apache/uniffle/pull/1874
* [#1471] feat(server/dashboard): Add Reg time to ServerNode by @maobaolong in https://github.com/apache/uniffle/pull/1862
* [#1401] feat(dashboard): Shuffle server page list sorting function. by @yl09099 in https://github.com/apache/uniffle/pull/1868
* [#1401] improvement(dashboard): Make startup scripts support JDK9 or later. by @yl09099 in https://github.com/apache/uniffle/pull/1880
* [#1735] fix(client): Shade spark client grpc/jetty and others dependencies by @maobaolong in https://github.com/apache/uniffle/pull/1878
* [MINOR] improvement(client): Rename rss.shade.packageName from org.apache.uniffle to org.apache.uniffle.shaded by @maobaolong in https://github.com/apache/uniffle/pull/1883
* [MINOR] fix(dashboard): Fix NPE when targetAddress is null for /api/server/nodes by @maobaolong in https://github.com/apache/uniffle/pull/1852
* [#1885] improvement(server): release usedMemory as soon as possible after buffer is released by @xianjingfeng in https://github.com/apache/uniffle/pull/1886
* [#1401] feat:(dashboard): Support deleting lost shuffle servers by @yl09099 in https://github.com/apache/uniffle/pull/1870
* [#1895] fix(dashboard): Correct dashboard start failed issue by @maobaolong in https://github.com/apache/uniffle/pull/1896
* [#1892] improvement(docs): Provide guidance on configuring memory-related configs by @rickyma in https://github.com/apache/uniffle/pull/1893
* [#1401] improvement:(dashboard): The list of servers and the number of states are updated synchronously. by @yl09099 in https://github.com/apache/uniffle/pull/1891
* [#1898] improvement(docs): Add docs for malloc recommendation by @rickyma in https://github.com/apache/uniffle/pull/1899
* [#1149][FOLLOWUP] fix(coordinator): Fix coordinator startup issues by @maobaolong in https://github.com/apache/uniffle/pull/1902
* [MINOR] fix(client/netty): ShuffleServerGrpcNettyClient missing to send shuffleId and partitionIds for requirePreAllocation request by @maobaolong in https://github.com/apache/uniffle/pull/1913
* [#1910] fix: Remove the method name from the log by @zuston in https://github.com/apache/uniffle/pull/1911
* [#1894] fix(server): Fix NPE caused by app not found issue by @maobaolong in https://github.com/apache/uniffle/pull/1915
* [MINOR] feat(common): Support set args from SystemProperties by @maobaolong in https://github.com/apache/uniffle/pull/1909
* [#1745] feat(remote merge): Introduce a common serializer. by @zhengchenyu in https://github.com/apache/uniffle/pull/1916
* [#1903] improvement(server): Add some metrics for shuffle server by @kuszz in https://github.com/apache/uniffle/pull/1904
* [#1917] fix(server,netty): Fix memory leak issues when handling SendShuffleDataRequest by @maobaolong in https://github.com/apache/uniffle/pull/1918
* [MINOR] feat(spark): Support reporting error messages from client when failing to send blocks by @maobaolong in https://github.com/apache/uniffle/pull/1914
* #1901 feat(script): Support using JVM args to start coordinator/shuffle-server/dashboard by @maobaolong in https://github.com/apache/uniffle/pull/1905
* [#1746] feat(remote merge): Introduce the reader and writer for record. by @zhengchenyu in https://github.com/apache/uniffle/pull/1920
* [#1901] [FOLLOWUP] fix(script): Fix docker-compose compatibility issue when running startup script by @maobaolong in https://github.com/apache/uniffle/pull/1926
* [MINOR] fix(ci): Run Docker and integration CI checks concurrently  by @maobaolong in https://github.com/apache/uniffle/pull/1922
* [#1924] feat(dashboard): Show Thread Dump, Conf and Metrics in DashBoard by @kuszz in https://github.com/apache/uniffle/pull/1927
* [#1747] feat(remote merge): Introduce common merger to merge multiple data streams. by @zhengchenyu in https://github.com/apache/uniffle/pull/1925
* [#1887] improvement: reject all requests from unregistered apps in shuffle server by @xianjingfeng in https://github.com/apache/uniffle/pull/1923
* [#1936] Support shuffle server rpc level audit log by @maobaolong in https://github.com/apache/uniffle/pull/1937
* [MINOR] fix(docker): replace netcat to netcat-openbsd in Dockerfile by @xianjingfeng in https://github.com/apache/uniffle/pull/1950
* [MINOR] fix(test): fix flaky test ShuffleServerOnRandomPortTest by @xianjingfeng in https://github.com/apache/uniffle/pull/1953
* [#1947] feat(server): Support authentication for decommission interface by @xianjingfeng in https://github.com/apache/uniffle/pull/1948
* [MINOR] fix(test): fix flaky test ServletTest.testUnhealthyNodesServlet by @xianjingfeng in https://github.com/apache/uniffle/pull/1952
* [FOLLOWUP] [#1401] Fix(dashboard): Fix the display of app reg time on app page by @maobaolong in https://github.com/apache/uniffle/pull/1963
* [#1966] improvement(script): Move rss-env.sh to conf folder by @maobaolong in https://github.com/apache/uniffle/pull/1962
* [#1961] Fix(client/spark): Add serialVersionUID to each class that implements Serializable by @maobaolong in https://github.com/apache/uniffle/pull/1960
* [#1956] fix(server): Prevent file deletion hang in case of disk corruption by @zuston in https://github.com/apache/uniffle/pull/1958
* [#1905][FOLLOWUP] docs: Add documents after introducing XXX_JAVA_OPTS env var by @maobaolong in https://github.com/apache/uniffle/pull/1933
* [#1608] feat: Introduce ExpiringClosableSupplier and refactor ShuffleManagerClient creation by @xumanbu in https://github.com/apache/uniffle/pull/1838
* [#1909] [FOLLOWUP] improve(common): Avoid load missing key from system properties by @maobaolong in https://github.com/apache/uniffle/pull/1951
* [MINOR] fix(test): remove useless code from ServletTest.testRequestWithWrongCredentials by @xianjingfeng in https://github.com/apache/uniffle/pull/1976
* [#1900] improvement: Rename DISCLAIMER-WIP to DISCLAIMER by @jerqi in https://github.com/apache/uniffle/pull/1974
* [MINOR] docs: Fix docs yaml parse error about dashboard_guide.md by @maobaolong in https://github.com/apache/uniffle/pull/1981
* [MINOR] feat(server,coordinator): Heartbeat server startTimeMs to coordinator by @maobaolong in https://github.com/apache/uniffle/pull/1975
* [#1959] improvement(script): Decouple scripts and configs by @maobaolong in https://github.com/apache/uniffle/pull/1957
* [#1927] fix(dashboard): Fix NPE issues in dashboard by @yl09099 in https://github.com/apache/uniffle/pull/1965
* [#1401] feat(dashboard): Add mock data to the Dashboard front end. by @yl09099 in https://github.com/apache/uniffle/pull/1989
* [#1980] feat(coordinator,script): Support coordinator rpc audit log by @maobaolong in https://github.com/apache/uniffle/pull/1979
* [#1985] fix(dashboard):  Cannot display server info when refreshing the server page by @yl09099 in https://github.com/apache/uniffle/pull/1996
* [MINOR] fix(spark-common): Fix typos in ShuffleManagerGrpcService and ShuffleBufferWithLinkedList by @maobaolong in https://github.com/apache/uniffle/pull/1998
* [#1401] feat(dashboard): Support adding shuffle servers to the blacklist on the page by @yl09099 in https://github.com/apache/uniffle/pull/1897
* [#1977] improvment(dashboard): Add version and git commit id in dashboard by @lwllvyb in https://github.com/apache/uniffle/pull/1964
* [#1977][FOLLOWUP] fix(coordinator): When resolving merge conflicts, some changes were reverted by @lwllvyb in https://github.com/apache/uniffle/pull/2001
* [#1990] improvement(infra): introduce Lombok by @xianjingfeng in https://github.com/apache/uniffle/pull/1999
* [#1975][FOLLOWUP] feat(dashboard): Support displaying the start time of server in dashboard by @maobaolong in https://github.com/apache/uniffle/pull/1986
* [MINOR] improvement(dashboard): Combine server table columns by @maobaolong in https://github.com/apache/uniffle/pull/1997
* [#2003][FOLLOWUP] fix(client): Replace rss.rpc.client.type.grpc.timeout with rss.client.rpc.timeout.ms in RssShuffleManagerBase by @xumanbu in https://github.com/apache/uniffle/pull/2004
* [#1401] feat(dashboard): Support removing excluded servers by @yl09099 in https://github.com/apache/uniffle/pull/1969
* [#1401] improvement(dashboard): Fixed distorted page display due to excessively long property values by @yl09099 in https://github.com/apache/uniffle/pull/2009
* [MINOR] improvement(dashboard): Rename JettyServerFront to Dashboard by @maobaolong in https://github.com/apache/uniffle/pull/2012
* [#1888] feat(server): Reject requireBuffer/sendShuffleData for an application if one of the partitions exceeds the limit by @maobaolong in https://github.com/apache/uniffle/pull/1889
* [#1994] improvement(netty): Add Netty support for TEZ tasks in Uniffle. by @qijiale76 in https://github.com/apache/uniffle/pull/1995
* [MINOR] feat(client-spark/coordinator/sever/dashboard):Show version and commit id for each Process for easy troubleshooting by @maobaolong in https://github.com/apache/uniffle/pull/2010
* [MINOR] build: Update create-package.sh by @jerqi in https://github.com/apache/uniffle/pull/2019
* [#1982] fix(build): specify maven.compiler.release while JDK version greater than 8 by @xianjingfeng in https://github.com/apache/uniffle/pull/1983
* [MINOR] fix(client-spark): Fix to use correct options for enable rssStageRetry by @maobaolong in https://github.com/apache/uniffle/pull/2023
* [#2017] feat(coordinator/server): Support config to exclude verbose operation from rpc audit log by @maobaolong in https://github.com/apache/uniffle/pull/2014
* [#2025] fix(all): Fix a batch of typo issue by @maobaolong in https://github.com/apache/uniffle/pull/2026
* chore(build): Disable lombok by default and only enable them in web directories by @advancedxy in https://github.com/apache/uniffle/pull/2024
* [MINOR] improve(server): Add return value to server rpc audit log by @maobaolong in https://github.com/apache/uniffle/pull/2007
* [MINOR] Improve(script): Change intellij launch config file name and local-dev conf folder by @maobaolong in https://github.com/apache/uniffle/pull/2008
* [#1748] feat(remote merge): Introduce MergeManager to merge records on the server side. by @zhengchenyu in https://github.com/apache/uniffle/pull/1946
* [MINOR] improvement(all): Create a server-common module to reduce client-side dependencies by @maobaolong in https://github.com/apache/uniffle/pull/1884
* [#2018] docs: Add Troubleshooting document by @maobaolong in https://github.com/apache/uniffle/pull/2032
* [MINOR] feat(dashboard/coordinator): Display total number of applications in dashboard by @maobaolong in https://github.com/apache/uniffle/pull/2031
* [MINOR] chore: Disable rust ci check by @maobaolong in https://github.com/apache/uniffle/pull/2041
* [#1973] feat(server,coordinator): Refactor metrics system to reduce periodic reporting load by @kuszz in https://github.com/apache/uniffle/pull/1991
* [MINOR] fix(coordinator): Correcting Assignment of appCurrent and appTotality by @maobaolong in https://github.com/apache/uniffle/pull/2050
* [#2046] fix(server): Rename RSS_CLIENT_TYPE to RSS_COORDINATOR_CLIENT_TYPE by @xumanbu in https://github.com/apache/uniffle/pull/2047
* [#2044] improvement: Remove console from log4j2.xml. by @zhengchenyu in https://github.com/apache/uniffle/pull/2045
* [#1699][FOLLOWUP] fix(client): Using collection4 instead of collection3 by @maobaolong in https://github.com/apache/uniffle/pull/2042
* [MINOR] feat(coordinator/dashboard): Show start time of CoordinatorServer to dashboard by @maobaolong in https://github.com/apache/uniffle/pull/2038
* [#1987] fix(tez): Application may get stuck when exception occurs. by @zhengchenyu in https://github.com/apache/uniffle/pull/1992
* [MINOR] fix(script): Fix log4j2.xml script and intellij launch conf to support output audit logs by @maobaolong in https://github.com/apache/uniffle/pull/2028
* [MINOR] improve(script): Support collect the output stream into out file by @maobaolong in https://github.com/apache/uniffle/pull/2051
* [#2056] feat(common): add a NONE type to compression.codec by @wForget in https://github.com/apache/uniffle/pull/2057
* [MINOR] chore: replace mvn with mvnw in publish_maven_artifacts.sh by @xianjingfeng in https://github.com/apache/uniffle/pull/2079
* [#2048] feat(coordinator): Introduce dashboard page in dashboard web ui by @maobaolong in https://github.com/apache/uniffle/pull/2049
* [#1930] fix(server): Fix a double release issue about clearResource thread by @maobaolong in https://github.com/apache/uniffle/pull/1931
* [#2035] improvement(build): Fix CentOS 7 "Cannot find a valid baseurl for repo" error. by @qijiale76 in https://github.com/apache/uniffle/pull/2036
* chore: re-enable Rust CI by @advancedxy in https://github.com/apache/uniffle/pull/2085
* [MINOR] feat(coordinator/server): Support RPC from-address to audit log and refactor RpcAuditContext by @maobaolong in https://github.com/apache/uniffle/pull/2013
* [MINOR] chore(ci): Add a shade check step after build spark shade jar by @maobaolong in https://github.com/apache/uniffle/pull/2037
* [#2068] Introduce PortRegistry and applied to JettyServerTest by @maobaolong in https://github.com/apache/uniffle/pull/2070
* [#1972] fix(server): Fix clear leak shuffle data accidentally remove data of new coming appId issue by @maobaolong in https://github.com/apache/uniffle/pull/1971
* [#2072] improvement: Corrected buffer offsets in NoOpCodec.decompress by @wForget in https://github.com/apache/uniffle/pull/2072
* [#2073] fix(server): throws EventRetryException If Exception is encountered during create write handler by @xianjingfeng in https://github.com/apache/uniffle/pull/2074
* [#2090] fix(client): use thread-safe list to store the sending status by @xianjingfeng in https://github.com/apache/uniffle/pull/2091
* [MINOR] fix(client): Fix the error message for LocalFileClientReadHandler. by @zhengchenyu in https://github.com/apache/uniffle/pull/2097
* [#2087] feat(operator): support closing leader election of webhook of rss-operator by @wangao1236 in https://github.com/apache/uniffle/pull/2089
* [#2096] fix(client): Share Netty's memory allocators in gRPC by @zhengchenyu in https://github.com/apache/uniffle/pull/2098
* [#1987][FOLLOWUP] fix(tez): Application may get stuck when exception … by @zhengchenyu in https://github.com/apache/uniffle/pull/2075
* [Bug] Fixed the UT null pointer of RpcClientRetryTest. by @yl09099 in https://github.com/apache/uniffle/pull/2102
* [#2094] feat(client): Introduce retry mechanism for coordinator client by @kuszz in https://github.com/apache/uniffle/pull/2095
* [#2103] fix(server): Potential bytebuf offset race condition when flushing and getting data by @zhengchenyu in https://github.com/apache/uniffle/pull/2104
* [#1749] feat(remote merge): Introduce new reader for reading sorted data. by @zhengchenyu in https://github.com/apache/uniffle/pull/2034
* [#2065] Fix QuorumTest to use random port by @maobaolong in https://github.com/apache/uniffle/pull/2066
* [#1466][FOLLOWUP] improvement(common/server): Add jvm pause monitor metrics by @maobaolong in https://github.com/apache/uniffle/pull/2114
* fix[server] Fix duplicate blockId cause netty memory leak by @lwllvyb in https://github.com/apache/uniffle/pull/2106
* [MINOR] improve(common/server/coordinator): Display the port in use port by @maobaolong in https://github.com/apache/uniffle/pull/2122
* [MINOR] fix(test): Enable BLOCK_SIZE_METRIC to enable blockSizeMetricsTest by @maobaolong in https://github.com/apache/uniffle/pull/2128
* [MINOR] Enlarge the app/server table height in the application page by @maobaolong in https://github.com/apache/uniffle/pull/2123
* [#1991][FOLLOWUP] Refactor SupplierGauge to support generic type and add requireBufferCount metrics by @maobaolong in https://github.com/apache/uniffle/pull/2113
* [#2107] improvement(client): Optimize the conf of the number of threads of Netty client by @xianjingfeng in https://github.com/apache/uniffle/pull/2108
* [#2120] Support Update the RssConf while reload config from config file by @maobaolong in https://github.com/apache/uniffle/pull/2121
* [#2030] fix(client-spark): Remove javax and logging from relocation list to solve NoClassDefFoundError by @maobaolong in https://github.com/apache/uniffle/pull/2029
* [#2130] fix(server): Potential huge partition limit invalid when flushing is slow by @zuston in https://github.com/apache/uniffle/pull/2131
* [#2030][FOLLOWUP] Exclude log4j dependencies from shaded plugin by @maobaolong in https://github.com/apache/uniffle/pull/2134
* [#1606] feat(tez): Add retry mechanism for NO_BUFFER when reading data(memory/local/index) by @zhengchenyu in https://github.com/apache/uniffle/pull/2110
* [MINOR] fix: Change to get coordinator appCurrent value from metrics by @maobaolong in https://github.com/apache/uniffle/pull/2129
* [#2105] fix(server): Fix memory leak caused by duplicate blocks when using ShuffleBufferWithSkipList. by @zhengchenyu in https://github.com/apache/uniffle/pull/2141
* [MINOR] test: Fix flaky test about ShuffleServerMetricsTest#testStorageCounter by @maobaolong in https://github.com/apache/uniffle/pull/2142
* [MINOR] improve(client): Reduce reassignResult log size within driver by @maobaolong in https://github.com/apache/uniffle/pull/2147
* [MINOR] fix: fix log content of MultiReplicaClientReadHandler#readShuffleData by @maobaolong in https://github.com/apache/uniffle/pull/2143
* [#2119] fix(server): Duplicate blockId causes shuffle Server network to be full. by @yl09099 in https://github.com/apache/uniffle/pull/2124
* [#2117] feat(server): Introduce bufferPool related metrics(block/buffer/shuffle count) by @maobaolong in https://github.com/apache/uniffle/pull/2118
* [MINOR] improve(script): Support customize Default Gc args by @maobaolong in https://github.com/apache/uniffle/pull/2135
* [#2157] test: Disable AccessClusterTest until solve this flaky test by @maobaolong in https://github.com/apache/uniffle/pull/2151
* [FOLLOWUP][#2105] Fix memory leak caused by duplicate blocks when using ShuffleBufferWithLinkedList by @maobaolong in https://github.com/apache/uniffle/pull/2150
* [MINOR] improve(server): Log more before server remove resource by @maobaolong in https://github.com/apache/uniffle/pull/2133
* [MINOR] fix(server): Correct warning log for missing index when getLocalShuffleIndex by @maobaolong in https://github.com/apache/uniffle/pull/2144
* [#1750] feat(remote merge): Support MapReduce. by @zhengchenyu in https://github.com/apache/uniffle/pull/2109
* [#2136] feat:(Server/Coordinator) Support a way to updateConf from rest api by @maobaolong in https://github.com/apache/uniffle/pull/2137
* [#2158] feat(common): Introduce reconfigure listener by @maobaolong in https://github.com/apache/uniffle/pull/2159
* [#2125] feat(common): Introduce ThreadPoolManager support metrics by @maobaolong in https://github.com/apache/uniffle/pull/2127
* [#1750] feat(remote merge): Support Tez. by @zhengchenyu in https://github.com/apache/uniffle/pull/2160
* [MINOR] improvement(server): Record more grpc process time and total metrics by @maobaolong in https://github.com/apache/uniffle/pull/2167
* [#2165] fix(client): Fix the exception caused by repeated unregister shuffle in tez tasks. by @zhengchenyu in https://github.com/apache/uniffle/pull/2166
* [MINOR] improve(server): Add debug log when cacheShuffleData by @maobaolong in https://github.com/apache/uniffle/pull/2156
* [#2158][FOLLOWUP] improvement(server/coordinator): Support notify reconfig listeners from rest api by @maobaolong in https://github.com/apache/uniffle/pull/2170
* [#2061]fix(server): Fix netty memory leak when removeBuffer and cacheShuffle… by @lwllvyb in https://github.com/apache/uniffle/pull/2059
* [MINOR] improvement(server): Perf for single Local storage by @maobaolong in https://github.com/apache/uniffle/pull/2176
* [#2059][FLOLLOWUP]fix[server] fix spotless error by @lwllvyb in https://github.com/apache/uniffle/pull/2184
* [MINOR] feat(server): Introduce in flush block count metrics in buffer pool by @maobaolong in https://github.com/apache/uniffle/pull/2183
* [#2183] [FOLLOWUP] Fix spotless issue error by @maobaolong in https://github.com/apache/uniffle/pull/2185
* [MINOR] improvement(server): Avoid copy while toFlushEvent invoked by @maobaolong in https://github.com/apache/uniffle/pull/2177
* [#2169] feat(server)(coordinator): Support dynamic thread number update about ThreadPool by @maobaolong in https://github.com/apache/uniffle/pull/2168
* [#2190] feat(client): Add support about setting extra system properties by @zuston in https://github.com/apache/uniffle/pull/2191
* [#2192] improvement(spark): set rss.enabled to true in RssShuffleManager by @wForget in https://github.com/apache/uniffle/pull/2193
* [#2154] fix: Correct the data length and buffer size metrics and logs by @maobaolong in https://github.com/apache/uniffle/pull/2155
* [#2153] fix(client): Fix requestShuffleAssignment in RssShuffleManagerBase by @kuszz in https://github.com/apache/uniffle/pull/2138
* [#2133][FOLLOWUP] improvement(server): Support output the shuffle data size and block count before purge app by @maobaolong in https://github.com/apache/uniffle/pull/2180
* [#1628] test(client): Fix double release ShuffleIndexResult cause exception to pass flaky test  by @maobaolong in https://github.com/apache/uniffle/pull/2179
* [MINOR] improvement(server,coordinator): Support config grpc queue size by @maobaolong in https://github.com/apache/uniffle/pull/2175
* [2171] improvement(remote merge): remove cached block for partition. by @zhengchenyu in https://github.com/apache/uniffle/pull/2172
* [MINOR] feat(operator): Add support to pass annotations to coordinator nodeport/headless service by @shlomitubul in https://github.com/apache/uniffle/pull/2187
* [#2015] improvement(netty): Support Netty for MR integration test. by @qijiale76 in https://github.com/apache/uniffle/pull/2016
* [#2060] fix(server): Fix memory leaks when reaching memory limit by @lwllvyb in https://github.com/apache/uniffle/pull/2058
* [#2209] feat(server): Support config buffer size for LocalFileWriter by @lwllvyb in https://github.com/apache/uniffle/pull/2210
* [#2205] feature(dashboard) Display version and gitCommitId in one column by @lwllvyb in https://github.com/apache/uniffle/pull/2206
* [#2207] feat(dashboard): Add the write information of appinfo in Shuflle Server heartbeat by @lwllvyb in https://github.com/apache/uniffle/pull/2208
* [MINOR]improvement(client/server): (RemoteMerger) Refactor to use mergeContext collect the arguments related by @maobaolong in https://github.com/apache/uniffle/pull/2195
* [#2209] [FOLLOWUP]feat(server) Support config buffer size for HadoopShuffleWriteHandler by @lwllvyb in https://github.com/apache/uniffle/pull/2216
* [#2173] feat(remote merge): support netty for remote merge. by @zhengchenyu in https://github.com/apache/uniffle/pull/2202
* [#2209][FOLLOWUP] improvement(docs): Add documents for the two bufferSize configs. by @lwllvyb in https://github.com/apache/uniffle/pull/2213
* [#2203] feat(server) Add write file quantity info for application.  by @lwllvyb in https://github.com/apache/uniffle/pull/2204
* [#2211] feat(dashboard) Display the write information of application in dashboard by @lwllvyb in https://github.com/apache/uniffle/pull/2215
* [#2174] feat(remote merge): Add metric for sorted api. by @zhengchenyu in https://github.com/apache/uniffle/pull/2218
* [MINOR] feat(server): Introduce metrics related bitmaps(committedBlockIds/cachedBlockIds/partitionToBlockIds) by @maobaolong in https://github.com/apache/uniffle/pull/2186
* [#2198]fix(server) reduce the redundant appId info for partitionKey in Abstr… by @lwllvyb in https://github.com/apache/uniffle/pull/2199
* [#2200] docs: Add document for remote merge. by @zhengchenyu in https://github.com/apache/uniffle/pull/2221
* [MINOR] improvement(dashboard): Support sortable for totalSize column of applicationPage within dashboard webui by @maobaolong in https://github.com/apache/uniffle/pull/2224
* [#2222] feat(server): Introduce LocalFileWriterFactory and LocalFileNioWriter impl by @maobaolong in https://github.com/apache/uniffle/pull/2223
* [MINOR] improvement(server): Reduce huge amount of server log when `Accepted blockId` by @maobaolong in https://github.com/apache/uniffle/pull/2225
* [MINOR] feat(operator): Add support for PodManagementPolicy by @shlomitubul in https://github.com/apache/uniffle/pull/2226
* [#2197] Support reg app conf to server and avoid update committed/cached blockIds bitmap by @maobaolong in https://github.com/apache/uniffle/pull/2196
* [#2181]improvement(server): Replace ShuffleBlockInfo with ShufflePartitionedBlock in netty by @lwllvyb in https://github.com/apache/uniffle/pull/2182
* [#2161] improvement(core): Add the license of tikv/raft-engine by @jerqi in https://github.com/apache/uniffle/pull/2233
* [MINOR] chore: Copy license files into the maven artifacts by @xianjingfeng in https://github.com/apache/uniffle/pull/2234
* fix(rust): Make the test with 1 thread to eliminate flaky test by @zuston in https://github.com/apache/uniffle/pull/2236
* [MINOR] improvement(server): Dynamic conf support of server memory watermark by @maobaolong in https://github.com/apache/uniffle/pull/2231
* [#2136][FOLLOWUP] improvement(server,coordinator): Modify the path of update conf rest api by @maobaolong in https://github.com/apache/uniffle/pull/2235
* [MINOR] fix(spark-client): Fix NPE while using DelegationRssShuffleManager in executor by @maobaolong in https://github.com/apache/uniffle/pull/2237
* [MINOR] improvement(server,coordinator): Dynamic conf support report interval of PrometheusPushGatewayMetricReporter by @maobaolong in https://github.com/apache/uniffle/pull/2232
* [#2229] feat(server,client): Introduce `OutputUtils` class to reduce log size by @maobaolong in https://github.com/apache/uniffle/pull/2230
* [#2086] feat(spark): Support cut partition to slices and served by multiply server by @maobaolong in https://github.com/apache/uniffle/pull/2093
* [#2243] improvement(server): Record the unexpected exception event flushing operation duration by @zuston in https://github.com/apache/uniffle/pull/2244
* [MINOR] improvement(ci): add some examples and notice by @maobaolong in https://github.com/apache/uniffle/pull/2240
* [MINOR] improvement(server): LOG the exception call stack while unregisterShuffle by @maobaolong in https://github.com/apache/uniffle/pull/2228
* [#2241] feat(server): Introduce option to mark server unhealthy once any storage corrupted by @zuston in https://github.com/apache/uniffle/pull/2245
* [#2152] improvement(dashboard): Add session cache to support refresh page of dashboard by @kuszz in https://github.com/apache/uniffle/pull/2238
* [MINOR] chore: Fix the issue of license loss. by @zhengchenyu in https://github.com/apache/uniffle/pull/2248
* [#2241] improvement(server): Introduce storage flush operation timeout cancel to avoid disk hang by @zuston in https://github.com/apache/uniffle/pull/2247
* [#2219] feat: Introduce ShuffleBlockIdManagerFactory and PartitionedShuffleBlockIdManager by @maobaolong in https://github.com/apache/uniffle/pull/2227
* [MINOR] feat(spark-client): Support set accessId by another config dynamically by @maobaolong in https://github.com/apache/uniffle/pull/2250
* [#2251] fix(server): fix wrong disk used space while config multiply dirs in one mount point by @maobaolong in https://github.com/apache/uniffle/pull/2252
* [#2241][FOLLOWUP] improvement(server): Mark the underlying thread name by @zuston in https://github.com/apache/uniffle/pull/2256
* [MINOR] feat(server,dashboard,coordinator): Report configured metrics of server to coordinator and display to dashboard by @maobaolong in https://github.com/apache/uniffle/pull/2239
* [MINOR] Bump version to 0.11.0-SNAPSHOT by @jerqi in https://github.com/apache/uniffle/pull/2249
* [MINOR] fix(client): Fix error log for CoordinatorGrpcRetryableClient#accesCluster by @maobaolong in https://github.com/apache/uniffle/pull/2258
* [#2259] fix(server) dataLength of ShuffleBufferWithLinkedList not be cleared after toFlushEvent by @lwllvyb in https://github.com/apache/uniffle/pull/2260
* [#436] feat(client,server): Introduce multi-part LocalStorageManager by @maobaolong in https://github.com/apache/uniffle/pull/2253
* [MINOR] improvement(spark-client): put sparkConf as extra properties while client request accessCluster by @maobaolong in https://github.com/apache/uniffle/pull/2254
* [MINOR] improvement(dashboard): Support sort application info by partition num by @maobaolong in https://github.com/apache/uniffle/pull/2264
* [MINOR] improvement(community): Add security.md by @jerqi in https://github.com/apache/uniffle/pull/2268
* [#436][FOLLOWUP] docs: Add documents for localStorageManagerClass and MultiPartLocalStorageManager by @maobaolong in https://github.com/apache/uniffle/pull/2266
* [MINOR] Correct the NOTICE and LICENSE by @jerqi in https://github.com/apache/uniffle/pull/2271
* [MINOR] build: Add left licenses by @jerqi in https://github.com/apache/uniffle/pull/2272
* [#1844] fix(spark): Triggering Stage retry requires reassigning the shuffle server in the retry Stage. by @yl09099 in https://github.com/apache/uniffle/pull/1845
* [MINOR] test: Fix ConcurrentModifiedException while use TestAppender by @maobaolong in https://github.com/apache/uniffle/pull/2285
* [#2282] improvement(spark3): Invoke with object self in DelegationRssShuffleManager by @zuston in https://github.com/apache/uniffle/pull/2283
* [#2290] docker: Fix the build of Centos image by @jerqi in https://github.com/apache/uniffle/pull/2291
* [#2292] fix(server): Potential hang when HadoopShuffleWriteHandler initialization failure in PooledHadoopShuffleWriteHandler by @zuston in https://github.com/apache/uniffle/pull/2293
* [#2288] feat(dashboard): Show nodeInfo in excludeNode page by @kuszz in https://github.com/apache/uniffle/pull/2289
* [#2298] fix(server): Correct the metric of grpc_get_local_shuffle_data_process_latency by @zuston in https://github.com/apache/uniffle/pull/2299
* [#2188] fix(client): Fixup timeoutMs for executeTasks in ShuffleWriteClientImpl#sendAppHeartbeat by @xumanbu in https://github.com/apache/uniffle/pull/2189
* [#2279] improvement(spark): Trigger the upstream rewrite when the read stage fails  by @yl09099 in https://github.com/apache/uniffle/pull/2281
* [#2298] fix(server): followup to correct the metric of grpc_get_local_shuffle_index by @zuston in https://github.com/apache/uniffle/pull/2302
* [#2304] improvement: Update the year of NOTICE by @jerqi in https://github.com/apache/uniffle/pull/2313
* [#2305] improvement: Add copyright for PingCAP by @jerqi in https://github.com/apache/uniffle/pull/2312
* [#2306] improvement: Remove repeated notice information by @jerqi in https://github.com/apache/uniffle/pull/2311
* [MINOR] docs: Fix the license format of remote_merge_guide.md by @xianjingfeng in https://github.com/apache/uniffle/pull/2314
* [#2307] license: Add left jars with Apache license by @jerqi in https://github.com/apache/uniffle/pull/2310
* [#2308] improvement(server): More detailed and clear logs on reading failure for FileSegmentManagedBuffer by @zuston in https://github.com/apache/uniffle/pull/2309
* [#2315] feat(test): Introduce a client simulator tool to simulate send shuffle data request for testing server performance by @maobaolong in https://github.com/apache/uniffle/pull/2316
* [#2254][FOLLOWUP] improvement(spark):Add include key filter before report extraProperties by @maobaolong in https://github.com/apache/uniffle/pull/2265
* [#1782] fix: Fix flaky test ShuffleBufferManagerTest by @maobaolong in https://github.com/apache/uniffle/pull/2100
* [#2269] refactor: Fix duplicated blockIds issue caused by duplicated reportShuffleResult by @maobaolong in https://github.com/apache/uniffle/pull/2270
* [MINOR] test: fix NPE for test PartitionBalanceAssignmentStrategyTest by @maobaolong in https://github.com/apache/uniffle/pull/2322
* [MINOR] fix(test): Disable System exit for HadoopTestBase by @maobaolong in https://github.com/apache/uniffle/pull/2327
* [MINOR] fix(test): Fix flaky test for CoordinatorGrpcTest by @maobaolong in https://github.com/apache/uniffle/pull/2324
* [MINOR] improvement(server): LocalFileNioWriter support writeIndex api by @maobaolong in https://github.com/apache/uniffle/pull/2320
* [MINOR] feat(server): Introduce LocalFileBlackHoleWriter for test flush ceiling performance by @maobaolong in https://github.com/apache/uniffle/pull/2321
* [MINOR] fix(server): Server heartbeat to coordinator while unregister shuffle by @maobaolong in https://github.com/apache/uniffle/pull/2132
* [MINOR] fix(spark-client) Close coordinator client in time by @maobaolong in https://github.com/apache/uniffle/pull/2328
* [MINOR] fix(spark-client): Fix fallback to sort fail issue by @maobaolong in https://github.com/apache/uniffle/pull/2329
* [MINOR] fix(test): Fix flaky test for DynamicClientConfServiceHadoopTest by @maobaolong in https://github.com/apache/uniffle/pull/2326
* [MINOR] fix(test): Fix flaky test for CoordinatorGrpcServerTest#testGrpcConnectionSize by @maobaolong in https://github.com/apache/uniffle/pull/2323
* [#1872] improvement: Update the project directory name by @cchung100m in https://github.com/apache/uniffle/pull/2319
* [MINOR] fix(test): Fix flaky test CoordinatorServerTest#test by @maobaolong in https://github.com/apache/uniffle/pull/2332
* [MINOR] improvement(spark-client): Refactor RssShuffleManager for spark2 and spark3 to reduce redundant code by @maobaolong in https://github.com/apache/uniffle/pull/2330
* [MINOR] feat(server): Introduce LocalFileNullDeviceWriter to flush data into null device for test flush ceiling performance by @maobaolong in https://github.com/apache/uniffle/pull/2337
* [#2335] Improvement: Fix the warning:   Parameter `systemProperties` is deprecated: Use `systemPropertyVariables` instead. by @cchung100m in https://github.com/apache/uniffle/pull/2336
* [#2343] Improvement: Fix the warning `Discovered module-info.class. Shading will break its strong encapsulation`. by @cchung100m in https://github.com/apache/uniffle/pull/2345
* [#2346] Improvement: Fix the warning that delete(Path) in FileSystem has been deprecated by @cchung100m in https://github.com/apache/uniffle/pull/2347
* [#2333] Improvement: extend the timeout value for QuorumTest#case6 by @cchung100m in https://github.com/apache/uniffle/pull/2348
* [#2350] improvement(coordinator): Add metrics of active/lost server number by @zuston in https://github.com/apache/uniffle/pull/2351
* [#2349] Improvement: Fix the warning: unchecked method invocation: method put in interface Map is applied to given types by @cchung100m in https://github.com/apache/uniffle/pull/2352
* [#1658] fix(server): FileSegmentManagedBuffer#nioByteBuffer read result cacheable by @xumanbu in https://github.com/apache/uniffle/pull/1659
* [#2354] feat(client): Explicitly setting grpc netty based event loop threads to avoid too much threads by @zuston in https://github.com/apache/uniffle/pull/2355
* fix(ci): Upgrade to actions/upload-artifact@v4 by @zuston in https://github.com/apache/uniffle/pull/2360
* improvement(spark): Involve shuffle result report time into shuffle write time metrics by @zuston in https://github.com/apache/uniffle/pull/2361
* improvement(spark): Record the partition choosing sort time for analysis by @zuston in https://github.com/apache/uniffle/pull/2364
* [#2362] feat(client): Add support of zstd parallel compression by @zuston in https://github.com/apache/uniffle/pull/2363
* [#291] feat(client): Introduce PrefetchableClientReadHandler to support async read by @zuston in https://github.com/apache/uniffle/pull/2365
* [#291] feat(client): Record background fetch time for prefetch by @zuston in https://github.com/apache/uniffle/pull/2366
* [#2362] feat(client): Log more compression infos by @zuston in https://github.com/apache/uniffle/pull/2367
* [#2356] Improvement: Fix the warning: unchecked call to put(E) as a member of the raw type `RMRecordsReader.Queue` by @cchung100m in https://github.com/apache/uniffle/pull/2357
* improvement(client): Simplify skipping processed blockIds check to speed up by @zuston in https://github.com/apache/uniffle/pull/2368
* [#2353] Improvement: Fix the warning: unchecked method invocation: method `sendCachedBuffer` in class `RMRecordsReader.RecordsCombiner` is applied to given types by @cchung100m in https://github.com/apache/uniffle/pull/2358
* [#2083] improvement: Quickly delete local or HDFS data at the shuffleId level. by @yl09099 in https://github.com/apache/uniffle/pull/2084
* chore: Remove the rust impl by @zuston in https://github.com/apache/uniffle/pull/2373
* [#2370] Improvement: Fix the warning: [unchecked] unchecked call to add(E) as a member of the raw type List by @cchung100m in https://github.com/apache/uniffle/pull/2371
* [MINOR] improvement: Simplify return expression by @summaryzb in https://github.com/apache/uniffle/pull/2375
* [#2376] test(coordinator): The interval of `SimpleClusterManager.nodesCheck` should be bigger than that of `org.awaitility.Awaitility.await` by @summaryzb in https://github.com/apache/uniffle/pull/2377
* [#2378] test(client): Fix flaky test QuorumTest#case10 by @summaryzb in https://github.com/apache/uniffle/pull/2379
* [#2372] Improvement: Fix the warning that unchecked method invocation: method `deserializeStream` in class SerializerInstance is applied to given types by @cchung100m in https://github.com/apache/uniffle/pull/2374
* [#2382] improvement(test): Fix ServletTest, ShuffleServerFaultToleranceTest,ShuffleServerWithKerberizedHadoopTest to use random port by @summaryzb in https://github.com/apache/uniffle/pull/2384
* [#2383] Improvement: Fix the warning that unchecked call to `RecordsReader(RssConf,SerInputStream,Class<K>,Class<V>,boolean,boolean)` as a member of the raw type `RecordsReader` by @cchung100m in https://github.com/apache/uniffle/pull/2386
* [#2389] fix:(remote merge): Fixed the issue of losing data when calling hasNext multiple times. by @zhengchenyu in https://github.com/apache/uniffle/pull/2390
* [#2385] improvement(test): Make all tests in `integration-common-test` use random port by @summaryzb in https://github.com/apache/uniffle/pull/2387
* [#1745] feat(remote merge): Introduce kryo serializer for spark. by @zhengchenyu in https://github.com/apache/uniffle/pull/2395
* [MINOR] fix(test): Prevent shuffle rpc client leak in test by @summaryzb in https://github.com/apache/uniffle/pull/2403
* [#2385] fix(server): FileSegmentManagedBuffer release concurrently avoid NPE by @summaryzb in https://github.com/apache/uniffle/pull/2406
* [#2401] Make it possible to get the actual port when config jetty port to zero by @summaryzb in https://github.com/apache/uniffle/pull/2402
* [#2398]Improvement: Fix the warning unchecked generic array creation for varargs parameter of type `Class<? extends Throwable>[]` by @cchung100m in https://github.com/apache/uniffle/pull/2400
* [#2093][followup] feat: Add support of partition split for grpc by @zuston in https://github.com/apache/uniffle/pull/2396
* [#2388] improvement(test): mr, tez, spark integration test use random port by @summaryzb in https://github.com/apache/uniffle/pull/2397
* [#2411] fix(spark): Spill memory corresponding to successfully sent bl… by @summaryzb in https://github.com/apache/uniffle/pull/2415
* [MINOR] fix(test): Fix test for LocalStorageManagerTest by @asalamon74 in https://github.com/apache/uniffle/pull/2416
* [#2417] improvement: Remove "incubating" in scripts and docs by @rickyma in https://github.com/apache/uniffle/pull/2418
* [#1651] improvement(netty): Set Netty as the default server type by @rickyma in https://github.com/apache/uniffle/pull/1919
* feat(client): Introduce `LOAD_BALANCE` mode for partition split by @zuston in https://github.com/apache/uniffle/pull/2408
* [#1651] fix(netty): Set Netty as the default server type by @zhengchenyu in https://github.com/apache/uniffle/pull/2421
* [MINOR] test: clean temp dir and allocate real ports for MiniDFSCluster by @SuperMetaStream in https://github.com/apache/uniffle/pull/2425
* [MINOR] chore(ci): update dorny/paths-filter@v2 to dorny/paths-filter@v3.0.2 by @xianjingfeng in https://github.com/apache/uniffle/pull/2429
* [MINOR]fix-spotless-after-2425 by @SuperMetaStream in https://github.com/apache/uniffle/pull/2431
* [Minor] Eliminate the usage of the shaded Guava Sets class by @asalamon74 in https://github.com/apache/uniffle/pull/2432
* [MINOR] improvement(client): Detailed error message in ShuffleWriteClientImpl by @asalamon74 in https://github.com/apache/uniffle/pull/2433
* [MINOR] Fix logger classname in RssMergeManager by @asalamon74 in https://github.com/apache/uniffle/pull/2435
* [#2426] improvement: Skip the application which is expired when flushing buffers by @xianjingfeng in https://github.com/apache/uniffle/pull/2427
* [#2082] fix: spark executor task error when reading shuffle data when  using java open jdk11 by @jerqi in https://github.com/apache/uniffle/pull/2436
* [#1651] fix(netty): Set Netty as the default client type by @asalamon74 in https://github.com/apache/uniffle/pull/2422
* fix(test): Fix test about default storage type for DefaultStorageMediaProviderTest by @asalamon74 in https://github.com/apache/uniffle/pull/2419
* [MINOR] docs: fix storage type in MR / TEZ documentation. by @asalamon74 in https://github.com/apache/uniffle/pull/2438
* [#2439] fix(test): remove shuffleServer from coordinators when it stops by @xianjingfeng in https://github.com/apache/uniffle/pull/2440
* fix(spark3): Reserve previous writer initialization way for gluten + uniffle by @zuston in https://github.com/apache/uniffle/pull/2437
* [#493][FOLLOWUP] improvement: replace putIfAbsent to avoid performance loss by @xianjingfeng in https://github.com/apache/uniffle/pull/2444
* [#2428] fix(test): Fix flaky test for LocalStorageManagerTest#testGetLocalStorageInfo by @SuperMetaStream in https://github.com/apache/uniffle/pull/2430
* [#2441] improvement(client): remove synchronized in ShuffleServerClientFactory#getShuffleServerClient by @xianjingfeng in https://github.com/apache/uniffle/pull/2442
* fix(CI): Update CI ubuntu version to latest by @zuston in https://github.com/apache/uniffle/pull/2448
* [MINOR] fix(docker): Fix hadoop version by @asalamon74 in https://github.com/apache/uniffle/pull/2447
* [MINOR] fix(tez): Use correct Field object for InputDescriptor className by @qijiale76 in https://github.com/apache/uniffle/pull/2445
* [MINOR] fix(docs): Fixing formatting error by @asalamon74 in https://github.com/apache/uniffle/pull/2452
* [#2457] feat(spark): Introducing shuffle-server data push statistics by @zuston in https://github.com/apache/uniffle/pull/2458
* [MINOR] fix(docs): Fixing rss-env.sh directory by @asalamon74 in https://github.com/apache/uniffle/pull/2462
* [Improvement] Clear the alarm log when starting the relevant service by @yl09099 in https://github.com/apache/uniffle/pull/2453
* [#2460] feat(spark)(part-1): Introducing spark uniffle ui for better observability by @zuston in https://github.com/apache/uniffle/pull/2459
* [#2460] feat(spark)(part-2): Add support of history server plugin by @zuston in https://github.com/apache/uniffle/pull/2464
* improvement(docker): Add dashboard to docker by @asalamon74 in https://github.com/apache/uniffle/pull/2463
* [#2466] fix(server): Ignore appIdToInfos when serialize ServerNode by @xianjingfeng in https://github.com/apache/uniffle/pull/2467
* [#2460] feat(spark)(part-3): Add support of read metrics report by @zuston in https://github.com/apache/uniffle/pull/2465
* [#2454] improvement(server): Remove lock in ShuffleTaskManager#registerShuffle by @xianjingfeng in https://github.com/apache/uniffle/pull/2456
* [#2460][part-4] feat(spark): Hybrid storage reading statistics by @zuston in https://github.com/apache/uniffle/pull/2468
* [#2369] fix(spark): Potential race condition on reading prefetch by @zuston in https://github.com/apache/uniffle/pull/2475
* [#1745][FOLLOWUP] fix(client): exclude kryo when package spark shaded client by @xianjingfeng in https://github.com/apache/uniffle/pull/2478
* [#2469] feat(spark): Create a unique ShuffleId for Uniffle for stage retry by @yl09099 in https://github.com/apache/uniffle/pull/2471
* [MINOR] improvement(remote merge): print log when merge failed by @xianjingfeng in https://github.com/apache/uniffle/pull/2479
* [#2460] feat(spark): Tracking failure of pushing data for spark UI by @zuston in https://github.com/apache/uniffle/pull/2481
* [#2483] fix(spark): Avoid NoSuchElementException error by @wForget in https://github.com/apache/uniffle/pull/2484
* [#2485] fix(client): Fix NPE in CoordinatorGrpcRetryableClient.getShuffleAssignments by @wForget in https://github.com/apache/uniffle/pull/2486
* [#2487] fix(client): Fix NPE in UniffleListener by @wForget in https://github.com/apache/uniffle/pull/2488
* [#2490] feat(spark): Display memory usage of all consumers under low-memory conditions by @zuston in https://github.com/apache/uniffle/pull/2491
* [#2495] feat(server): Add an option to disable flush buffer when caching data by @xianjingfeng in https://github.com/apache/uniffle/pull/2497
* [#1727] feat(server): Introduce local allocation buffer to store blocks in memory by @xianjingfeng in https://github.com/apache/uniffle/pull/2492
* [#2460] feat(spark3): Add fine-grained shuffle write times with different parts by @zuston in https://github.com/apache/uniffle/pull/2498
* feat(client): Log show with data bytes for each data RPC by @zuston in https://github.com/apache/uniffle/pull/2499
* [#2460] feat(spark3): Add client/uniffle different observed shuffle speed by @zuston in https://github.com/apache/uniffle/pull/2500
* [#2460] feat(spark3): Add reassign info into UI tab by @zuston in https://github.com/apache/uniffle/pull/2501
* [#2460] fix(spark3): Record require buffer failure number every time by @zuston in https://github.com/apache/uniffle/pull/2505
* [#2506] feat(spark3): Introduce option to enable reorder multi servers for reader by @zuston in https://github.com/apache/uniffle/pull/2507
* [#2512] feat(spark3): Attach stacktrace on any exception when UI tab rendering by @zuston in https://github.com/apache/uniffle/pull/2513
* [#2514] fix(spark3): Invalid decimal value conversion on spark UI rendering by @zuston in https://github.com/apache/uniffle/pull/2515
* [#2502] feat(spark3): Fast fail for those stale assign blocks for partition reassign by @zuston in https://github.com/apache/uniffle/pull/2516
* [#2508] feat(spark3): Record failed tasks on any shuffle write/failure into event logs by @zuston in https://github.com/apache/uniffle/pull/2509
* [#2518] fix(client): Disable fast fail on any pushing failure if partition reassign is activated by @zuston in https://github.com/apache/uniffle/pull/2519
* [#2503] fix(spark): Skip reassignment number check on partition split by @zuston in https://github.com/apache/uniffle/pull/2504
* [#2520] fix(spark3): Shuffle write total duration is incorrectly accumulated in event log by @zuston in https://github.com/apache/uniffle/pull/2521
* [#2496] improvement(server): Improve the performance of flushing single buffer by @xianjingfeng in https://github.com/apache/uniffle/pull/2523
* [#2494] feat(client): Introduce codec statistics to measure de/compression performance by @zuston in https://github.com/apache/uniffle/pull/2528
* [#2529] fix(spark3): Incorrect clientInfo without nettyPort if netty is enabled by @zuston in https://github.com/apache/uniffle/pull/2530
* [#2496] improvement(server): Use `tryLock` instead of `synchronized` on buffer flushing by @xianjingfeng in https://github.com/apache/uniffle/pull/2524
* [#2526] improvement: Reset the chunkID if it overflow by @OmarBustamante in https://github.com/apache/uniffle/pull/2531
* [#2494] feat(spark): Overlapping compression to avoid blocking shuffle writing by @zuston in https://github.com/apache/uniffle/pull/2511
* [#2537] feat(spark): Introduce option to activate small cache in grpc server by @zuston in https://github.com/apache/uniffle/pull/2538
* [#2540] feat(spark): Show compression ratio into spark UI tab by @zuston in https://github.com/apache/uniffle/pull/2542
* [#2536] feat(spark): Controllable concurrency for overlapping compression by @zuston in https://github.com/apache/uniffle/pull/2541
* [#2545] feat: Align with spark executor cores on overlapping compression by @zuston in https://github.com/apache/uniffle/pull/2548
* [#2533] fix(client): Fix NPE on rendering spark UI tab by @wForget in https://github.com/apache/uniffle/pull/2552
* [#2544] fix(client): NPE about StatisticsCodec by @SalvadorRomo in https://github.com/apache/uniffle/pull/2547
* [#2525] improvement(server): add some metrics for LAB by @xianjingfeng in https://github.com/apache/uniffle/pull/2553
* [#2539] fix(client-spark): NPE in DataPusher when sendShuffleData fails by @yunchipang in https://github.com/apache/uniffle/pull/2556
* [#2492][FOLLOWUP] improvement: change the default value of chunkPoolCapacityRatio by @xianjingfeng in https://github.com/apache/uniffle/pull/2554
* [MINOR] improvement(client): Simplify logging of heartbeat failures by @xianjingfeng in https://github.com/apache/uniffle/pull/2559
* [#2555] feat(server): support dynamically modifying the tags of shuffle server by @xianjingfeng in https://github.com/apache/uniffle/pull/2557
* [MINOR] improvement(client): Shorten log for multi replica client reader by @zuston in https://github.com/apache/uniffle/pull/2561
* [#2560] improvement(client): Fast fail on hadoop reader initialization failure by @zuston in https://github.com/apache/uniffle/pull/2551
* [#2549] fix: Invalid remote storage configuration was propagated during application registration by @zuston in https://github.com/apache/uniffle/pull/2550
* [#2563] improvement(spark): Add more logs of shuffle write on reassignment failure by @zuston in https://github.com/apache/uniffle/pull/2564
* [#2525][FOLLOWUP] fix(server): remove metric `buffer_block_size` by @xianjingfeng in https://github.com/apache/uniffle/pull/2567
* [#2558] improvement(server): Limit the max flush event count for a single buffer by @xianjingfeng in https://github.com/apache/uniffle/pull/2562
* [MINOR] chore(CI): bump dorny/paths-filter from v3.0.2 to de90cc6fb38fc0963ad72b210f1f284cd68cea36 by @xianjingfeng in https://github.com/apache/uniffle/pull/2570
* [#2571] fix(client): Race condition when adding shuffle servers by @zuston in https://github.com/apache/uniffle/pull/2574
* [#2576] fix: Warm up java version var to eliminate lock on creating concurrent hashmap by @zuston in https://github.com/apache/uniffle/pull/2577
* [#2581] fix(spark): Use `SparkContext getActive` instead of `getOrCreate` to align with method semantics by @wForget in https://github.com/apache/uniffle/pull/2582
* [#2579] fix(spark): Correct partition length for overlapping compression by @zuston in https://github.com/apache/uniffle/pull/2580
* [#2527] docs: Add some docs for LAB by @xianjingfeng in https://github.com/apache/uniffle/pull/2585
* [#2568] feat(spark): Use space-efficient protobuf for `MutableShuffleHandleInfo` to reduce RPC memory overhead by @zuston in https://github.com/apache/uniffle/pull/2578
* [#2583] fix(spark): Enable taskId filter only on AQE and multi replicas for reader by @zuston in https://github.com/apache/uniffle/pull/2584
* [#2586] fix(spark): Support writer switching servers on partition split with LOAD_BALANCE mode without reassign by @zuston in https://github.com/apache/uniffle/pull/2587
* [#2494] feat(spark): Enable overlapping compression by default by @zuston in https://github.com/apache/uniffle/pull/2588
* [#2575] fix(spark): Fix java.lang.IndexOutOfBoundsException: len is negative by @cchung100m in https://github.com/apache/uniffle/pull/2589
* [#2592] fix(spark): Ignore failure when reporting shuffle read metrics to driver by @zuston in https://github.com/apache/uniffle/pull/2593
* [#2569] feat(spark): Add statistic of shuffle read times by @zuston in https://github.com/apache/uniffle/pull/2598
* [#2601] feat(spark): Overlapping decompression for shuffle read by @zuston in https://github.com/apache/uniffle/pull/2602
* [#2591] feat(client): Introduce the mechanism to report localfile read plan by @zuston in https://github.com/apache/uniffle/pull/2603
* [#2591] fix(client): Incorrect header length for getLocalShuffleDataV3 by @zuston in https://github.com/apache/uniffle/pull/2604
* [#2591] fix(client): Missing task_id propagation in getLocalShuffleDataV3 by @zuston in https://github.com/apache/uniffle/pull/2605
* [#2609] feat(spark): Expose `checkDataIfAnyFailure` method so that Gluten can invoke it to trigger reassign ASSP by @zuston in https://github.com/apache/uniffle/pull/2610
* [#2606] feat(mr): Add safety switch for map-stage combiner by @Lobo2008 in https://github.com/apache/uniffle/pull/2607
* [#2599] fix(spark): Fix bug the incorrect shuffle read metric for spark by @cchung100m in https://github.com/apache/uniffle/pull/2600
* Remove protected branch by @jerqi in https://github.com/apache/uniffle/pull/2615
* Just a minor by @zuston in https://github.com/apache/uniffle/pull/2613
