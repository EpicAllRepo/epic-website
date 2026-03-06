"use client";

import React, { useState } from "react";
import countries from "@/data/countries.json";

// Validation helpers
const isValidEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    return re.test(email.trim());
};

const isValidWebsite = (url: string) => {
    if (!url) return true; // optional
    const re = /^(https?:\/\/)?([\w-]+\.)+[\w]{2,}(\/.*)?$/i;
    return re.test(url.trim());
};

const isValidPhone = (phone: string, digits: number) => {
    const cleaned = phone.replace(/\D/g, "");
    return cleaned.length === digits;
};

type Errors = {
    name?: string;
    website?: string;
    email?: string;
    phone?: string;
    budget?: string;
};

const ReviewForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        website: "",
        email: "",
        phone: "",
        budget: "",
        startDate: "",
    });

    const [selectedCountry, setSelectedCountry] = useState(countries[0]);
    const [countrySearch, setCountrySearch] = useState("");
    const [showDropdown, setShowDropdown] = useState(false);
    const [errors, setErrors] = useState<Errors>({});
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [errorMsg, setErrorMsg] = useState("");

    const filteredCountries = countries.filter((c) =>
        c.name.toLowerCase().includes(countrySearch.toLowerCase()) ||
        c.code.includes(countrySearch)
    );

    const validate = () => {
        const newErrors: Errors = {};

        if (!formData.name.trim()) newErrors.name = "Name is required.";

        if (!formData.website.trim()) {
            newErrors.website = "Website is required.";
        } else if (!isValidWebsite(formData.website)) {
            newErrors.website = "Enter a valid website URL.";
        }

        if (!formData.email.trim()) {
            newErrors.email = "Email is required.";
        } else if (!isValidEmail(formData.email)) {
            newErrors.email = "Enter a valid email address.";
        }

        if (!formData.phone.trim()) {
            newErrors.phone = "Phone number is required.";
        } else if (!isValidPhone(formData.phone, selectedCountry.digits)) {
            newErrors.phone = `Enter a valid ${selectedCountry.digits}-digit number for ${selectedCountry.name}.`;
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        // Phone: only allow digits
        if (name === "phone") {
            const digitsOnly = value.replace(/\D/g, "");
            setFormData((prev) => ({ ...prev, phone: digitsOnly }));
        } else {
            setFormData((prev) => ({ ...prev, [name]: value }));
        }
        setErrors((prev) => ({ ...prev, [name]: undefined }));
    };

    const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const country = countries.find((c) => c.name === e.target.value)!;
        setSelectedCountry(country);
        setFormData((prev) => ({ ...prev, phone: "" }));
        setErrors((prev) => ({ ...prev, phone: undefined }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validate()) return;

        setStatus("loading");
        setErrorMsg("");

        try {
            const res = await fetch("/api/review-budget", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    ...formData,
                    phone: `${selectedCountry.code} ${formData.phone}`,
                }),
            });

            const data = await res.json();

            if (!res.ok) {
                setErrorMsg(data.error || "Something went wrong.");
                setStatus("error");
                return;
            }

            setStatus("success");
        } catch {
            setErrorMsg("Network error. Please try again.");
            setStatus("error");
        }
    };

    const handleReset = () => {
        setFormData({ name: "", website: "", email: "", phone: "", budget: "", startDate: "" });
        setSelectedCountry(countries[0]);
        setErrors({});
        setStatus("idle");
        setErrorMsg("");
        setCountrySearch("");
        setShowDropdown(false);
    };

    const inputClass = (field: keyof Errors) =>
        `w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 ${errors[field] ? "border-red-500" : "border-gray-300"
        }`;

    return (
        <div className="bg-white rounded-xl shadow-xl w-full max-w-md">
            {/* Header */}
            <div className="bg-[#FE0107] text-white text-center py-4 rounded-t-xl font-semibold text-lg">
                Request a quote
            </div>

            {/* Success State */}
            {status === "success" ? (
                <div className="p-8 flex flex-col items-center gap-4 text-center">
                    <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center">
                        <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">Sent Successfully!</h3>
                    <p className="text-sm text-gray-500">
                        Thanks for reaching out. Our team will get back to you shortly.
                    </p>
                    <button
                        onClick={handleReset}
                        className="mt-2 text-sm text-red-600 font-semibold hover:underline cursor-pointer"
                    >
                        ← Get back to form
                    </button>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="p-6 space-y-4" noValidate>

                    {/* Name */}
                    <div>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Full Name *"
                            className={inputClass("name")}
                        />
                        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                    </div>

                    {/* Website */}
                    <div>
                        <input
                            type="text"
                            name="website"
                            value={formData.website}
                            onChange={handleChange}
                            placeholder="Website (e.g. https://example.com)"
                            className={inputClass("website")}
                        />
                        {errors.website && <p className="text-red-500 text-xs mt-1">{errors.website}</p>}
                    </div>

                    {/* Email */}
                    <div>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Email Address *"
                            className={inputClass("email")}
                        />
                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                    </div>

                    {/* Phone with Country Code */}
                    <div>
                        <div className="flex gap-2">
                            {/* Country Selector */}
                            {/* Country Selector */}
                            <div className="relative w-28 shrink-0">
                                <button
                                    type="button"
                                    onClick={() => setShowDropdown((prev) => !prev)}
                                    className="w-full border border-gray-300 rounded-md px-2 py-2 text-sm bg-white flex items-center gap-1 focus:outline-none focus:ring-2 focus:ring-red-500"
                                >
                                    <span>{selectedCountry.flag}</span>
                                    <span className="text-xs">{selectedCountry.code}</span>
                                    <span className="ml-auto text-gray-400 text-xs">▾</span>
                                </button>

                                {showDropdown && (
                                    <div className="absolute z-50 top-full left-0 mt-1 w-56 bg-white border border-gray-200 rounded-md shadow-lg">
                                        {/* Search */}
                                        <div className="p-2 border-b border-gray-100">
                                            <input
                                                type="text"
                                                value={countrySearch}
                                                onChange={(e) => setCountrySearch(e.target.value)}
                                                placeholder="Search country..."
                                                className="w-full text-xs border border-gray-200 rounded px-2 py-1 focus:outline-none focus:ring-1 focus:ring-red-400"
                                                autoFocus
                                            />
                                        </div>
                                        {/* List */}
                                        <ul className="max-h-48 overflow-y-auto">
                                            {filteredCountries.length > 0 ? (
                                                filteredCountries.map((c) => (
                                                    <li
                                                        key={c.name}
                                                        onClick={() => {
                                                            setSelectedCountry(c);
                                                            setFormData((prev) => ({ ...prev, phone: "" }));
                                                            setErrors((prev) => ({ ...prev, phone: undefined }));
                                                            setCountrySearch("");
                                                            setShowDropdown(false);
                                                        }}
                                                        className={`flex items-center gap-2 px-3 py-2 text-xs cursor-pointer hover:bg-red-50 ${selectedCountry.name === c.name ? "bg-red-50 font-semibold" : ""
                                                            }`}
                                                    >
                                                        <span>{c.flag}</span>
                                                        <span className="flex-1">{c.name}</span>
                                                        <span className="text-gray-400">{c.code}</span>
                                                    </li>
                                                ))
                                            ) : (
                                                <li className="px-3 py-2 text-xs text-gray-400">No results found</li>
                                            )}
                                        </ul>
                                    </div>
                                )}
                            </div>

                            {/* Phone Input */}
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder={`${"0".repeat(selectedCountry.digits)} *`}
                                maxLength={selectedCountry.digits}
                                className={`flex-1 border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 ${errors.phone ? "border-red-500" : "border-gray-300"
                                    }`}
                            />
                        </div>
                        {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                        <p className="text-gray-400 text-xs mt-1">
                            {selectedCountry.flag} {selectedCountry.name} · {selectedCountry.digits} digits required
                        </p>
                    </div>

                    {/* Budget */}
                    <input
                        type="text"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        placeholder="Budget"
                        className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                    />

                    {/* Date Picker */}
                    <input
                        type="date"
                        name="startDate"
                        value={formData.startDate}
                        onChange={handleChange}
                        min={new Date().toISOString().split("T")[0]}
                        className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 text-gray-500 cursor-pointer"
                    />

                    {/* API Error */}
                    {status === "error" && (
                        <p className="text-red-500 text-xs text-center">{errorMsg}</p>
                    )}

                    {/* Submit */}
                    <button
                        type="submit"
                        disabled={status === "loading"}
                        className="w-full bg-gradient-to-r from-red-700 to-red-800 text-white font-semibold py-2 rounded-md transition cursor-pointer hover:from-red-800 hover:to-red-900 disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                        {status === "loading" ? "Sending..." : "GET AN ESTIMATE"}
                    </button>

                </form>
            )}
        </div>
    );
};

export default ReviewForm;