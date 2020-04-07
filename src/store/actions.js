export const loadData = function ({commit}) {
    const data = JSON.parse(localStorage.getItem("data"));
    if (data) {
        const stocks = data.stocks;
        const funds = data.funds;
        const stocksPortfolio = data.stocksPortfolio;

        const portfolio = {
            funds,
            stocks : stocksPortfolio
        }

        commit("SET_STOCKS", stocks);
        commit("SET_PORTFOLIO", portfolio);
    }
}