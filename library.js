export function randColor() { return Math.floor(Math.random() * 16777215).toString(16); }
export function mentionToUser(mention, client) {
    const matches = mention.match(/^<@!?(\d+)>$/);
    if (!matches)
        return;
    return client.users.cache.get(matches[1]);
}