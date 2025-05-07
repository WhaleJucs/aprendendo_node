// middleware parttern (Chain of responsibillity)

const exec = (cxt, ...middlewares) => {
    const run = current => {
        middlewares && current < middlewares.length &&
        middlewares[current](cxt, () => run(current + 1))
    }
    run(0)
}

const mid1 = (cxt, next) => {
    cxt.info1 = 'mid1'
    next()
}

const mid2 = (cxt, next) => {
    cxt.info2 = 'mid2'
    next()
}

const mid3 = cxt => cxt.info3 = 'mid3'

const cxt = {}
exec(cxt, mid1, mid2, mid3)

console.log(cxt)