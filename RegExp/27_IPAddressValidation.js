let input = '3\nThis line has junk text.\n121.18.19.20\n2001:0db8:0000:0000:0000:ff00:0042:8329',
    input1 = '121.18.19.20';

function processData(input) {
    const values = input.split('\n');
    values.shift();
    for (const str of values) {
        if (str.match(/^(([0-9]|[0-9]{2}|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([1-9]|[0-9]{2}|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/)) {
            console.log('IPv4');
        } else if (str.match(/^[a-f0-9]{0,4}:[a-f0-9]{0,4}:[a-f0-9]{0,4}:[a-f0-9]{0,4}:[a-f0-9]{0,4}:[a-f0-9]{0,4}:[a-f0-9]{0,4}:[a-f0-9]{0,4}$/)) {
            console.log('IPv6');
        } else {
            console.log('Neither');
        }
    }
}

function processData2(input) {
    if (input.match(/^(([0-9]|[0-9]{2}|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([1-9]|[0-9]{2}|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/)) {
        console.log('IPv4');
    } else {
        console.log(`Doesn't work!`);
    }
}

processData(input);
processData2(input1);