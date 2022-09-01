import { NetworkInterfaceInfo, networkInterfaces } from "os";
import * as path from "path";
import * as fs from "fs";

export function getIpv4NetworkInterfaces(): [string, NetworkInterfaceInfo[]][] {
  return Object.entries(networkInterfaces())
    .filter(([_, info]) => {
      const ipv4 = info!.find((ip) => ip.family === "IPv4");
      return !!ipv4;
    })
}

export function logIpv4NetworkInterfaces(): void {
  getIpv4NetworkInterfaces()
    .forEach(([name, info]) => {
      const ipv4 = info!.find((ip) => ip.family === "IPv4");
      const alias = ipv4!.internal ? "Local" : name;
      console.log(`${alias}: http://${ipv4!.address}:${server.port}`);
    });
}

export function mkDirP(parentDir: string, childDir: string) {
  const resolvedDir = path.resolve(parentDir, childDir);
  if (!fs.existsSync(resolvedDir)) {
    fs.mkdirSync(resolvedDir, { recursive: true });
  }
  return resolvedDir;
}