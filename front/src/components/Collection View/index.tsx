import Container from "./styles";
import React from "react";

interface CollectionViewProps<T> {
    renderItem: (item: T) => React.ReactNode;
    items: T[];
    limit?: number;
}

function CollectionView <T extends unknown>(
    { renderItem, items }: CollectionViewProps<T>
) {
    //if (limit) items = items.slice(0, limit);
    return (
        <Container>
            {items.map((item, index) => (
                <React.Fragment key={index}>
                    {renderItem(item)}
                </React.Fragment>
            ))}
        </Container>
    );
}


export default CollectionView;