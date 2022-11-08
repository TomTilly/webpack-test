const components = ['componentA', 'componentB', 'componentD'];

for(const c of components) {
    // if(c !== 'componentD') continue;
    import(`./components/${c}`)
}

const main = 'main';