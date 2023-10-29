import { Link, useLocation } from "react-router-dom";

const Breadcrumbs = () => {
  // Get the current pathname from the URL
  const location = useLocation();

  let currentLink = ''

 

  // Split the pathname into an array of parts
  let crumbs = location.pathname.split("/")

  crumbs = crumbs
  .filter(cr => cr !== "")
  .map(cr => {

    currentLink += '/' + cr
 
  return (
    <div key={cr}>
      <Link
        to={currentLink}
        className="text-safety-orange-blaze-orange"
      >
        {cr} 
      </Link>
      {crumbs[crumbs.length - 1] === cr ? null : " > "}
    </div>
   ) })

  return (
    <div className="flex">
      <Link to="/" className="mr-1">
        Forsiden &gt;
      </Link>
      {crumbs}
    </div>
  )

 
};

export default Breadcrumbs;