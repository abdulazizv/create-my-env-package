export default function parseVariable(content) {
    const vars = content.split('\n');
    const response = []
    for(let x of vars) {
        let [key,value] = x.split('=')
        response.push([key,value])
    }

    return response;
}


