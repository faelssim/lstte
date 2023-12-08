export default defineNitroPlugin(nitroApp => {
    nitroApp.hooks.hook('render:html', (html, { event }) => {
        html.head.push(`<meta name="description" content="My Page Description 111" />`)
    })
})