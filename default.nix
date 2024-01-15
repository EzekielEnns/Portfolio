{ pkgs ? import <nixpkgs> { } }:
with pkgs;
let
in pkgs.mkShell {
  nativeBuildInputs = [
    nodejs_latest
    nodePackages_latest.pnpm
  ];
  installPhase = ''
  '';
  shellHook = ''
  '';
}
