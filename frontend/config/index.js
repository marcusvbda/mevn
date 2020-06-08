import dev from "./dev.env"
// import prod from "./prod.env"

let config = {
    APP_ENV: "homologation",
    homologation: dev,
    // production: prod,
}
config = { APP_ENV: config.APP_ENV, ...config[config.APP_ENV] }

module.exports = config