function convertToRupiah(angka) {
	const rupiah = new Intl.NumberFormat("id-ID", {
		style: "currency",
		currency: "IDR",
	}).format(angka);

	return rupiah;
}
