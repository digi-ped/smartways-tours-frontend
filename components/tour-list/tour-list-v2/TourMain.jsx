"use client";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import TopHeaderFilter from "@/components/tour-list/tour-list-v2/TopHeaderFilter";
import TourIndex from "@/components/tour-list/tour-list-v2/TourIndex";
import Sidebar from "@/components/tour-list/tour-list-v2/Sidebar";

const TourMain = () => {
  const searchParams = useSearchParams();
  const [selectedLocations, setSelectedLocations] = useState([]);

  useEffect(() => {
    const location = searchParams.get("location");
    if (location) {
      setSelectedLocations([location]);
    }
  }, [searchParams]);

  return (
    <>
      <div className="col-xl-3">
        <aside className="sidebar y-gap-40 xl:d-none">
          <Sidebar setSelectedLocations={setSelectedLocations} />
        </aside>
        <div
          className="offcanvas offcanvas-start"
          tabIndex="-1"
          id="listingSidebar"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasLabel">
              Filter Tours
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <Sidebar setSelectedLocations={setSelectedLocations} />
          </div>
        </div>
      </div>
      <div className="col-xl-9">
        <TopHeaderFilter />
        <div className="mt-30"></div>
        <TourIndex selectedLocations={selectedLocations} />
      </div>
    </>
  );
};

export default TourMain;
