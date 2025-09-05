import React, { useEffect, useState } from "react";

interface OrderBook {
    status: string;
    lastUpdate: number;
    lastTradePrice: string;
    asks: [string, string][]; // [price, amount]
    bids: [string, string][];
}

const Chand: React.FC = () => {
    const [symbol, setSymbol] = useState<string>("BTCIRT"); // بازار پیش‌فرض
    const [orderBook, setOrderBook] = useState<OrderBook | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        setLoading(true);
        setError(null);

        fetch(`https://apiv2.nobitex.ir/v3/orderbook/${symbol}`)
            .then((res) => res.json())
            .then((data: OrderBook) => {
                if (data.status === "ok") {
                    setOrderBook(data);
                }

                else {
                    setError("مشکل در دریافت اطلاعات");
                }

                setLoading(false);
            })
            .catch(() => {
                setError("خطا در ارتباط با سرور");
                setLoading(false);
            });
    }, [symbol]);

    return (
        <div className="bg-slate-900 text-slate-100 min-h-screen flex items-center justify-center">
            <div className="w-full max-w-3xl p-4 space-y-6">
                <div className="bg-slate-800 rounded-2xl shadow p-4">
                    <h2 className="text-lg font-bold mb-4">📊 اردربوک ({symbol})</h2>

                    {/* Select currancy */}
                    <div className="mb-4">
                        <select
                            value={symbol}
                            onChange={(e) => setSymbol(e.target.value)}
                            className="bg-slate-700 text-slate-100 rounded-lg p-2 w-full"
                        >
                            <option value="BTCIRT">BTC / IRT</option>
                            <option value="ETHIRT">ETH / IRT</option>
                            <option value="USDTIRT">USDT / IRT</option>
                            <option value="BTCUSDT">BTC / USDT</option>
                            <option value="ETHUSDT">ETH / USDT</option>
                        </select>
                    </div>

                    {loading ? (
                        <div className="italic opacity-70">در حال بارگذاری...</div>
                    ) : error ? (
                        <div className="text-red-400">{error}</div>
                    ) : orderBook ? (
                        <div className="grid grid-cols-2 gap-6">
                            {/* (Bids) */}
                            <div>
                                <h3 className="font-semibold mb-2">خریداران (Bids)</h3>
                                <div className="divide-y divide-slate-700">
                                    {orderBook.bids.slice(0, 10).map(([price, amount], i) => (
                                        <div key={i} className="flex justify-between py-1 text-sm">
                                            <span>{Number(price).toLocaleString("fa-IR")}</span>
                                            <span>{amount}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* (Asks) */}
                            <div>
                                <h3 className="font-semibold mb-2">فروشندگان (Asks)</h3>
                                <div className="divide-y divide-slate-700">
                                    {orderBook.asks.slice(0, 10).map(([price, amount], i) => (
                                        <div key={i} className="flex justify-between py-1 text-sm">
                                            <span>{Number(price).toLocaleString("fa-IR")}</span>
                                            <span>{amount}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="italic opacity-70">اطلاعاتی موجود نیست</div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Chand;
/**
 * @copyright
 * Code by Sobhan-SRZA (mr.sinre) | https://github.com/Sobhan-SRZA
 * Developed for Persian Caesar | https://github.com/Persian-Caesar | https://dsc.gg/persian-caesar
 *
 * If you encounter any issues or need assistance with this code,
 * please make sure to credit "Persian Caesar" in your documentation or communications.
 */