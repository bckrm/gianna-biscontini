export default function formatDate(datestring) {
    const options = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
    };
    return new Date(datestring).toLocaleDateString(undefined, options);
}
