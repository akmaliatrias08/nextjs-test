"use client";

import React from "react";
import {Button, Card} from "antd";
import {store} from "#/store";
import {observer} from "mobx-react-lite";

const Page = observer(() => {
    return <div>
        home: {store.ui.title}
        <Button onClick={() => {
            store.ui.changeTitle("from home")
        }}>change title</Button>
    </div>;
});

export default Page;

