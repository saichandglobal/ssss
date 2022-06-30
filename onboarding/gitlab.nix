# include me in /etc/nixos/configuration.nix
# includes = 
#   [
#     /etc/nixos/gitlab.nix
#   ];
# replace 'janedoe' with your unix username
# s/janedoe/calliope/g

let
  # Keep it reproducable by tying pkg version
  pkgs = import (fetchTarball "https://github.com/NixOS/nixpkgs/archive/47db3772a731d48f30d6dc97120ef77f5240096c.tar.gz") {};
  
  # We need kubectl 1.24.0, which needs go 1.18 to build.
  kubernetes_1_24 = (pkgs.kubernetes.override {
    buildGoModule = pkgs.buildGo118Module;
  }).overrideAttrs (old: rec {
    version = "v1.24.0";
    src = pkgs.fetchFromGitHub {
      owner = "kubernetes";
      repo  = "kubernetes";
      rev   = "v1.24.0";
      sha256 = "sha256-B5xA5StldfjK3R5PBWM/WI7j8p5RDmgJYuOwPf1J0Ro=";
    };
  });
  kubectl_1_24 = (pkgs.kubectl.override {
    buildGoModule = pkgs.buildGo118Module;
    kubernetes = kubernetes_1_24;
  });
in 
{

  # enable gnupg
  programs.gnupg.agent = {
    enable = true;
    enableSSHSupport = true;
  };
  # might as well enable docker too
  virtualisation.docker.enable = true;

  environment = {
    # SRE administration specific packages.
    systemPackages = with pkgs; [
      # tools
      google-cloud-sdk
      chefdk
      terraform
      doctl
      aws
      kubernetes-helm
      minikube
      sshuttle
      jq
      kubectx
      kubectl_1_24
    
      # yubikey bits
      yubikey-personalization
      libu2f-host
      pcsctools
      gnupg
    ];
  };

  # you'll want this for yubikey auth
  services.pcscd.enable = true;
  
  # Virtualbox, for minikube
  virtualisation.virtualbox.host.enable = true;
  users.extraGroups.vboxusers.members = [ "janedoe" ];
}
