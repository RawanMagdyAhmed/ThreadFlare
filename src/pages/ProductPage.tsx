import { formatPrice } from "@/lib/utils";

// Within your component where price is displayed:
<p className="text-2xl font-semibold text-threadflare-orange">{formatPrice(product.price)}</p>