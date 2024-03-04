import Keycloak from "keycloak-js";

const keycloak = new Keycloak({
    url: "https://vidoje-keycloak.azurewebsites.net/",
    realm: "master",
    clientId: "fe-product-app",
});

export default keycloak;