import compromise from 'compromise';

compromise.extend((Document, world, _nlp, Phrase, Term, Pool) => {
    world.addWords({
        download: 'Verb',
        upload: 'Verb',
        'dynamic campaign': 'Noun'
    })
})

export default compromise;
