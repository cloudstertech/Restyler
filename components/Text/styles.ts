
const body = {
    fontSize: 15,
    lineHeight: 18,
    color: "body"
};

const text = {
    h1: {
        fontSize: 32,
        lineHeight: 38,
        fontWeight: 'bold',
        color: "headings"
    },
    h2: {
        fontSize: 28,
        lineHeight: 33,
        fontWeight: 'bold',
        color: "headings"
    },
    h3: {
        fontSize: 23,
        lineHeight: 29,
        fontWeight: 'bold',
        color: "headings"
    },
    h4: {
        fontSize: 20,
        lineHeight: 24,
        fontWeight: 'bold',
        color: "headings"
    }, 
    h5: {
        fontSize: 18,
        lineHeight: 22,
        fontWeight: 'bold',
        color: "headings"
    }, 
    h6: {
        fontSize: 15,
        lineHeight: 18,
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
        fontSize: 13
    }, 
};

export type Text = typeof text;
export default text;
