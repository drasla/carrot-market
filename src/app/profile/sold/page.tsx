import { NextPage } from "next";
import Layout from "../../../components/layout";
import Item from "../../../components/item";
import { cls } from "../../../libs/client/utils";

const Sold: NextPage = () => {
    return (
        <Layout title="판매내역" canGoBack>
            <div className={cls(["flex", "flex-col", "space-y-5", "pb-10", "divide-y"])}>
                {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((_, i) => (
                    <Item id={i} key={i} title="iPhone 14" price={99} comments={1} hearts={1} />
                ))}
            </div>
        </Layout>
    );
};

export default Sold;
