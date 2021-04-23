# adminv2

The repo hosts the web site for the demo of our new Keycloak Admin Console V2.

Although it is hosted from this site, the new admin console will connect to your own Keycloak server.

## Set up Keycloak Server 13

To try out the demo, you will need Keycloak 13 or higher.

If needed, you can get a snapshot build from [this Snapshot Repo](https://repository.jboss.org/nexus/content/repositories/staging/org/keycloak/keycloak-server-dist/13.0.0-SNAPSHOT-stage-20210422-093800/).

## Create Admin V2 client

You will need to create a new client in your Keycloak 13 server.

First, download `security-admin-console-v2.json` from https://github.com/ssilvert/adminv2

Then in the old admin console:

1. Go to `Clients -> Create`
2. Click the `Select file` button
3. Open `security-admin-console-v2.json`
4. Click `Save` button

## Run the Keycloak Admin Console V2

To run the demo, use the following URL, specifying the location of your Keycloak 13 server:

https://ssilvert.github.io/adminv2/?keycloak-server=http://localhost:8080
