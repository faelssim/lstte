export default defineNitroPlugin(nitroApp => {
    nitroApp.hooks.hook('render:html', (html, { event }) => {
        console.log(html);
        console.log('****************************');
        html.head.push(`<meta name="description" content="My Page Description 111" />`)
    })
})