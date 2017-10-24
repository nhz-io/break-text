'use strict'

module.exports = function breakText (text = '') {
    const components = []

    let idx = 0

    for (let i = 0; i < text.length; i++) {
        const c = text[i]

        if (!components[idx]) {
            components[idx] = c

            continue
        }

        const p = components[idx][0]

        if (p === ' ') {
            if (c === ' ') {
                components[idx] += c
            } else {
                components.push(c)

                idx++
            }

            continue
        }

        if (p === '\n') {
            components.push(c)

            idx++

            continue
        }

        switch (c) {
            case ' ':
                components.push(c)
                idx++

                continue

            case '\n':
                components.push(c)
                idx++

                continue
            
            default:
                components[idx] += c

                continue
        }
    }

    return components
}