const Header = (props) => {
  console.log(props);
  return (
    <div className="min-h-full">
      <header className="bg-white shadow ">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 flex justify-between ">
          <h1 className="text-sm font-bold tracking-tight text-block">
            {`Order ${props.orderId}`}
          </h1>
          <div className="flex h-16 items-center justify-between">
            <div className="m-1">
              <button
                type="button"
                className="bg-white text-green-900 hover:bg-green-900 hover:text-white py-2 px-4 border border-green-900 rounded-full"
              >
                Back
              </button>
            </div>

            <div className="m-1">
              <button
                type="button"
                className="bg-green-900 text-white hover:bg-green-900 text-white py-2 px-4 border bg-green-900 rounded-full"
              >
                Approve Order
              </button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};
export default Header;
