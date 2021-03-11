module.exports = {
    async mounted() {
        this.$vendure.getActiveOrder().then((order) => {
            if (!order?.lines?.length) {
                this.$router.push('/assortiment/');
            }
        })
    }
}