import React, { useEffect, useState } from "react";

const formatNum = (num: number, locale: string, digits: number = 2) =>
    new Intl.NumberFormat(locale, {
        minimumFractionDigits: digits,
        maximumFractionDigits: digits,
    }).format(num);

const fractionDigitsFor = (symbol: string) => {
    if (symbol === "JPY" || symbol === "IRR") return 0;
    if (symbol === "BTC" || symbol === "ETH") return 6;
    return 2;
};

const Chand: React.FC = () => {
    const [fx, setFx] = useState<any>(null);
    const [symbols, setSymbols] = useState<string[]>(["EUR", "GBP", "JPY"]);
    const [usdPerOunce, setUsdPerOunce] = useState<number | null>(null);
    const [goldLoading, setGoldLoading] = useState<boolean>(true);
    const [goldError, setGoldError] = useState<string | null>(null);
    const [locale] = useState<string>("fa-IR");

    // دریافت نرخ ارزها
    useEffect(() => {
        fetch("https://api.exchangerate.host/latest?base=USD&access_key=b8c68cd3fb86a9bc176d7edac4199259")
            .then((res) => res.json())
            .then((data) => setFx(data))
            .catch((err) => console.error(err));
    }, []);

    // دریافت قیمت طلا از API رایگان
    useEffect(() => {
        setGoldLoading(true);
        fetch("https://api.exchangerate.host/live?currencies=USD&access_key=b8c68cd3fb86a9bc176d7edac4199259")
            .then((res) => res.json())
            .then((data) => {
                if (data?.rates?.USD) {
                    setUsdPerOunce(1 / data.rates.USD); // چون base=XAU هست
                }
                setGoldLoading(false);
            })
            .catch((err) => {
                setGoldError("خطا در دریافت قیمت طلا");
                setGoldLoading(false);
                console.error(err);
            });
    }, []);

    return (
        <div className="bg-slate-900 text-slate-100 min-h-screen flex items-center justify-center">
            <div className="w-full max-w-md p-4 space-y-6">
                {/* بخش ارز */}
                <div className="bg-slate-800 rounded-2xl shadow p-4">
                    <h2 className="text-lg font-bold mb-3">نرخ ارز (USD base)</h2>
                    <div className="divide-y divide-slate-700">
                        {symbols.length === 0 ? (
                            <div className="flex justify-between py-2 text-sm opacity-70 italic">
                                <span>هیچ ارزی انتخاب نشده</span>
                                <span>—</span>
                            </div>
                        ) : (
                            symbols.map((sym) => (
                                <div
                                    key={sym}
                                    className="flex justify-between py-2 text-sm"
                                >
                                    <span>{sym}</span>
                                    <span className="font-bold">
                                        {fx?.rates?.[sym]
                                            ? formatNum(
                                                fx.rates[sym],
                                                locale,
                                                fractionDigitsFor(sym)
                                            )
                                            : "—"}
                                    </span>
                                </div>
                            ))
                        )}
                    </div>
                </div>

                {/* بخش طلا */}
                <div className="bg-slate-800 rounded-2xl shadow p-4">
                    <h2 className="text-lg font-bold mb-3">قیمت طلا</h2>
                    {goldLoading ? (
                        <div className="italic opacity-70">در حال دریافت...</div>
                    ) : goldError ? (
                        <div className="text-red-400">{goldError}</div>
                    ) : usdPerOunce ? (
                        <div className="divide-y divide-slate-700">
                            <div className="flex justify-between py-2 text-sm">
                                <span>XAU / USD</span>
                                <span className="font-bold">
                                    {formatNum(usdPerOunce, locale, 2)}
                                </span>
                            </div>
                            <div className="flex justify-between py-2 text-sm">
                                <span>هر گرم (USD)</span>
                                <span className="font-bold">
                                    {formatNum(
                                        usdPerOunce / 31.1034768,
                                        locale,
                                        4
                                    )}
                                </span>
                            </div>
                            {fx?.rates?.IRR && (
                                <div className="flex justify-between py-2 text-sm">
                                    <span>XAU / IRR</span>
                                    <span className="font-bold">
                                        {formatNum(
                                            usdPerOunce * fx.rates.IRR,
                                            locale,
                                            0
                                        )}
                                    </span>
                                </div>
                            )}
                        </div>
                    ) : (
                        <div className="opacity-70 italic">—</div>
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