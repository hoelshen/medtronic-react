import React, { useEffect, useState } from 'react'
import { Item } from '../utils/itemType'
import './TablePart.css';

interface ITablePart {
    data: Item | null;
}

const horizontalWalk = (id: number, item: Item): Item | null => {
    if (item.id === id) {
        return null;
    }
    const newItem = { ...item };
    if (item.children) {
        const newChildren = [];
        for (const itemChild of item.children) {
            const result = horizontalWalk(id, itemChild);
            if (result) {
                newChildren.push(result);
            }
        }
        newItem.children = newChildren;
    }

    return newItem;
}

const TablePart: React.FC<ITablePart> = (props: ITablePart) => {
    const { data: sourceData } = props;
    const [data, setData] = useState<Item | null>(sourceData);

    useEffect(() => {
        setData(sourceData)
    }, [sourceData])
    const renderChildren = (items: Item[]) => {
        return (
            <div>{items.map(item => renderItem(item))}</div>
        )
    };

    const removeItem = (id: number) => {
        if (!data) {
            return setData(null);
        }
        const newItem = horizontalWalk(id, data);
        return setData(newItem);
    }

    const renderItem = (item: Item | null) => {
        if (!item) {
            return (<div>无数据</div>)
        }
        return (
            <div className="item-container" key={item.id}>
                <div className="item">
                    <span className="box-icon" onClick={() => removeItem(item.id)}>×</span>
                    {item.name}
                </div>

                {item.children ? renderChildren(item.children) : null}
            </div>
        )
    };
    return (<div>{renderItem(data)}</div>)
}

export { TablePart }
