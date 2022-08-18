import * as k8s from "@pulumi/kubernetes";
import * as kx from "@pulumi/kubernetesx";

const appLabels = { app: "test-nginx" };
const deployment = new k8s.apps.v1.Deployment("test-nginx", {
    spec: {
        selector: { matchLabels: appLabels },
        replicas: 1,
        template: {
            metadata: { labels: appLabels },
            spec: { containers: [{ name: "nginx", image: "nginx:1.22", imagePullPolicy: "IfNotPresent" }] }
        }
    }
});

export const name = deployment.metadata.name;
