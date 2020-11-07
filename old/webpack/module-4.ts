function sleep(ms: number) {
    return new Promise((res) => {
        setTimeout(res, ms);
    })
}

async function* getItemReallySlowly(items: any) {
    for (const item of items) {
        await sleep(1000);
        yield item;
    }
}

export default async function speakLikeSloth4(items: any) {
    for await (const item of getItemReallySlowly(items)) {
        console.log(item);
    }
}
