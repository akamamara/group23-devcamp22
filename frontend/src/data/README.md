# Group 23 DevCamp22

Data buat DEMO:

Tukang:

	kode_tukang : (kode untuk assign di servis)

Bahan:

	kode_bahan : (kode untuk assign di servis)
	
	nama_bahan
	
	desc
	
	satuan
	
	img_url		: url gambarnya dri google
	
	price

Servis:
	
	kode_servis
	
	dasar		: kata dasar yang dibuat untuk cari di NLP kita
	
	rinci
	
		nama_rinci
		
		keyword		: kata keyword rinci yang akan dicari di NLP kita
		
		list_tukang	: array tukang apa saja yang perlu untuk servis ini (diisi dengan kode_tukang nya)
		
		list_bahan	: array bahan apa saja yang perlu untuk servis ini (diisi dengan kode_bahan nya)
