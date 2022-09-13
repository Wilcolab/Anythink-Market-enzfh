import ItemPreview from "./ItemPreview";
import ListPagination from "./ListPagination";
import { connect } from "react-redux";
import React from "react";

const mapStateToProps = (state) => ({ ...state });

const ItemList = (props) => {
  if (!props.items) {
    return <div className="py-4">Loading...</div>;
  }

  function NoItemCard() {
    const { searchInput } = props.itemList;
    const text = `No items found for "${searchInput || ""}"`;
    return (
      <div
        id="empty"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          background: "rgb(204 204 204 / 30%)",
        }}
      >
        <span
          className="material-symbols-outlined"
          style={{
            fontSize: "3em",
            marginTop: "0.5em",
          }}
        >
          sentiment_dissatisfied
        </span>
        <div className="py-4 no-items">{text}</div>
      </div>
    );
  }

  if (props.items.length === 0) {
    return <NoItemCard />;
  }

  return (
    <div className="container py-2">
      <div className="row">
        {props.items.map((item) => {
          return (
            <div className="col-sm-4 pb-2" key={item.slug}>
              <ItemPreview item={item} />
            </div>
          );
        })}
      </div>

      <ListPagination
        pager={props.pager}
        itemsCount={props.itemsCount}
        currentPage={props.currentPage}
      />
    </div>
  );
};

// export default ItemList;
export default connect(mapStateToProps)(ItemList);
