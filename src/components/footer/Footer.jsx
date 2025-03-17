import React from "react"
export default class Footer extends React.Component {
    render() {
        return (
            <div class="bg-[#EDF7FA] p-10">
                <div class="max-w-full mx-auto">
                    <h1 class="text-3xl font-bold text-left text-gray-800 mb-4">KRYSTELLE ROMY GROUP</h1>
                    <div>

                    </div>
                    <div class="text-left mb-6">
                        <h2 class="text-2xl font-semibold text-gray-700"></h2>
                        <p class="text-gray-600"></p>
                    </div>

                    <div class="grid sm:grid-cols-4 gap-6 mb-6">
                        <div class=" p-4  rounded">
                            <h3 class="font-bold text-gray-700">KRYSTELLE ROMY</h3>
                            <p class="text-gray-600">DRE#019774847</p>
                        </div>
                        <div class=" p-4  rounded">
                            <h3 class="font-bold text-gray-700">EMAIL</h3>
                            <p class="text-gray-600">krystelle@gmail.com</p>
                        </div>
                        <div class=" p-4  rounded">
                            <h3 class="font-bold text-gray-700">PHONE</h3>
                            <p class="text-gray-600">(123) 456 7890</p>
                        </div>
                        <div class=" p-4  rounded">
                            <h3 class="font-bold text-gray-700">ADDRESS</h3>
                            <p class="text-gray-600">1123 HERMOSA AVENUE, SUITE #210, HERMOSA BEACH, CA 92804</p>
                        </div>
                    </div>

                    <p class="text-gray-500 text-sm text-center">
                        Krystelle Romy is a real estate agent licensed by the state of California affiliated with Compass.
                        All material presented herein is intended for informational purposes only. Information is compiled
                        from sources deemed reliable but is subject to errors, omissions, changes in price, condition, sale,
                        or withdrawal without notice. No statement is made as to accuracy of any description. All measurements
                        and square footages are approximate. This is not intended to solicit property already listed. Nothing
                        herein shall be construed as legal, accounting or other professional advice outside the realm of real estate brokerage.
                    </p>
                    <footer class="text-center text-gray-600 mt-8">
                        <hr className="font-bold" />
                        <div className="flex justify-between items-center mt-4">
                            <p>© 2023, KRYSTELLE. POWERED BY <a href="#" class="text-blue-600 underline">ROUNDTECHSQUARE</a></p>
                            <p>
                                <a href="#" class="text-sm">TERMS OF USE</a> |
                                <a href="#" class="text-sm">PRIVACY POLICY</a>
                            </p>
                        </div>
                    </footer>
                </div>
            </div>
        )
    }
}