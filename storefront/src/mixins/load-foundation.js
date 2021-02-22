module.exports = {
    mounted() {
        $?.(document).foundation();
    },
    destroyed() {
        $?.(document).foundation?.destroy();
    },
};