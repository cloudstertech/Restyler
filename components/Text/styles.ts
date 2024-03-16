
const body = {
    fontSize: 15,
    lineHeight: 18,
    color: "body",
    fontFamily: "inter-regular"
};

const headings = {
    fontFamily: "inter-semibold"
};

const text = {
    h1: {
        fontSize: 32,
        lineHeight: 38,        
        color: "headings",
        ...headings
    },
    h2: {
        fontSize: 28,
        lineHeight: 33,        
        color: "headings",
        ...headings
    },
    h3: {
        fontSize: 23,
        lineHeight: 29,        
        color: "headings",
        ...headings
    },
    h4: {
        fontSize: 20,
        lineHeight: 24,        
        color: "headings",
        ...headings
    }, 
    h5: {
        fontSize: 18,
        lineHeight: 22,        
        color: "headings",
        ...headings
    }, 
    h6: {
        fontSize: 15,
        lineHeight: 18,        
        color: "headings",
        ...headings
    },    
    body: {
        ...body
    },  
    bold: {
        ...body,
        fontFamily: "inter-medium"
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
