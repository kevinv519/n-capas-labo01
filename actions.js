const series = [
    {
        name: 'Breaking Bad',
        image: 'https://uproxx.files.wordpress.com/2016/06/walter_white.jpg?quality=100&w=650',
        description: 'When chemistry teacher Walter White is diagnosed with Stage III cancer and given only two years to live, he decides he has nothing to lose. He lives with his teenage son, who has cerebral palsy, and his wife, in New Mexico. Determined to ensure that his family will have a secure future, Walt embarks on a career of drugs and crime. He proves to be remarkably proficient in this new world as he begins manufacturing and selling methamphetamine with one of his former students. The series tracks the impacts of a fatal diagnosis on a regular, hard working man, and explores how a fatal diagnosis affects his morality and transforms him into a major player of the drug trade.'
    },
    {
        name: 'Bojack Horseman',
        image: 'https://uproxx.files.wordpress.com/2018/09/bojack-season-5-review.jpg?quality=100&w=650',
        description: 'Not enough people on the Internet have explained that BoJack Horseman is not what it might seem like. Not enough people raved that it was an often very funny, often very heartbreaking meditation on depression. It’s an animated sitcom about a washed-up horse, and somehow, it’s also an incredibly profound look at deeper themes. It’s amazing, but it may also leave you in a depressive funk for days afterward.'
    },
    {
        name: 'Stranger Things',
        image: 'https://uproxx.files.wordpress.com/2018/05/stranger-things-3-duffer-brothers.jpg?quality=100',
        description: 'A throwback and love letter to the early 1980s movies of Steven Spielberg and John Carpenter, the Duffer Brothers’ Stranger Things feels both familiar and new. It’s about a boy named Will (think E.T.‘s Elliot) who is captured by a The Thing-like creature and trapped in a Poltergeist-like world. His mother (Winona Ryder) recruits the local sheriff to investigate Will’s disappearance. Meanwhile, Will’s dorky, Goonies-like best friends take to their bikes to do some sleuthing of their own and eventually befriend an alien-like girl with telepathic powers (the E.T. of the series).'
    },
    {
        name: 'Mad men',
        image: 'https://uproxx.files.wordpress.com/2016/06/don-draper-mad-men4.jpg?quality=100',
        description: 'Mad Men is one of the best-written, best acted, and engrossing dramas on television. Period. The first season is a little slow, but keep with it: Matthew Weiner eventually layers in a lot of fun elements, and takes it home for a great ending.'
    },
    {
        name: 'The office',
        image: 'https://uproxx.files.wordpress.com/2018/09/the-office-diversity-day.jpg?quality=100',
        description: 'The original UK The Office mainstreamed Ricky Gervais’ awkward, uncomfortable humor, while The Office diluted it (some), layered in one of sitcom’s greatest romances (for four seasons, anyway), and surrounded Steve Carell with a remarkable, quirky supporting cast. The first four seasons still stand as the best workplace comedy in American sitcom history, even if the final four seasons were increasingly mediocre — though the series did redeem itself in the end.'
    }
]

let counter = 0;

// Loading each serie info into custom template
// const seriesElement = series.map(serie => {
//     counter++
//     return `
//     <div class='columns is-multiline'>
//         <div class='column is-full-touch is-one-third-widescreen'>
//             <img src='${serie.image}'>
//         </div>
//         <div class='column has-text-justified'>
//             <h1>${counter}. ${serie.name}</h1>
//             <p>${serie.description}</p>
//         </div>
//     </div>
//     `
// })

series.map(serie => {
    counter++
    let node = document.getElementById('serie-template').content.cloneNode(true)
    node.querySelector('#serie-image').src = serie.image
    node.querySelector('#serie-name').innerText = `${counter}. ${serie.name}`
    node.querySelector('#serie-description').innerHTML = `${serie.description}`
    document.getElementById('list-series').appendChild(node)
})


document.getElementById('list-series').innerHTML = seriesElement.join('')