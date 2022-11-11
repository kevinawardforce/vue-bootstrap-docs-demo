module.exports = [
    '/',
    {
        title: 'Components',
        collapsable: false,
        children: prefix('components', [
            'panel'
        ]),
    },
    {
        title: 'Mixins',
        collapsable: false,
        // children: prefix('mixins', [
        //     'clickoutside',
        //     'disableform',
        //     'formaturl'
        // ]),
    }
];

function prefix(prefix, children) {
    return children.map(child => `${prefix}/${child}`)
}
