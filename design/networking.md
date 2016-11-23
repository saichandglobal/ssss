# Networking

## Edge Routing

We will take delivery of two diverse 1GB network connections, each recieving a full BGP feed.
Routers will need to terminate 1GB ethernet handoff w/ uplink into core network.

## Core Routing & Switching

We will have a two node collapsed core architecture comprised of 40GB Open Network Switch
hardware running Cumulus Networks OS. The ASIC Chipset should be a Broadcom Tomahawk or Broadcom Trident2+.

## Host Connectivity

Hosts will be dual connected to each of the core switches by 40 GB interconnects.
Hosts will run Cumulus Quagga for end-to-end L3 connectivity and dynamic routing.
