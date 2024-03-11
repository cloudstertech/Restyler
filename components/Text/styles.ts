
const body = {
    fontSize: 16,
    lineHeight: 24,
    color: "body"
};

const text = {
    h1: {
        fontSize: 28,
        lineHeight: 36,
        fontWeight: 'bold',
        color: "headings"
    },
    h2: {
        fontSize: 24,
        lineHeight: 32,
        fontWeight: 'bold',
        color: "headings"
    },
    h3: {
        fontSize: 20,
        lineHeight: 26,
        fontWeight: 'bold',
        color: "headings"
    },
    h4: {
        fontSize: 16,
        lineHeight: 24,
        fontWeight: 'bold',
        color: "headings"
    },    
    body: {
        ...body
    },   
    muted: {
        ...body,
        color: "muted"
    },
    small: {
        ...body,
        fontSize: 12
    }, 
};

export type Text = typeof text;
export default text;
