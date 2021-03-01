module.exports = {
    mounted () {
        // Should always be called on the deepest childItem and NEVER twice, this causes the dropdown menu to act weird
        // $?.(this.$el).foundation(); // doesnt work
        $?.(document).foundation();
    }
};