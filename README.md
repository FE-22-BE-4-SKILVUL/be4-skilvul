# be4-skilvul
# FE22-BE4
Dokumentasi Final Project BE API
# User
EndPoint  | Method
------------- | -------------
/user/register  | post
/user/login  | post

# Kelas
EndPoint  | Method| Authorization
------------- | -------------| -------------
| /kelas/create 	| 	post | Bearer Token |
| /kelas/ |  get | Bearer Token |
| /kelas/update/:id | put | Bearer Token |
| /kelas/delete/:id | delete| Bearer Token |

# kategori
| End Point  		| 	Method | Authorization |
------------- | -------------| -------------
| /kategori/create 	| 	post | Bearer Token |
| /kategori/ |  get | Bearer Token |
| /kategori/update/:id | put | Bearer Token |
| /kategori/delete/:id | delete| Bearer Token |

# lokasi
| End Point  		| 	Method | Authorization |
------------- | -------------| -------------
| /lokasi/create 	| 	post | Bearer Token |
| /lokasi/ |  get | Bearer Token |
| /lokasi/update/:id | put | Bearer Token |
| /lokasi/delete/:id | delete| Bearer Token |

# artikel
| End Point  		| 	Method | Authorization |
------------- | -------------| -------------
| /artikel/create 	| 	post | Bearer Token |
| /artikel/ |  get | Bearer Token |

# landingpage
| End Point  		| 	Method |
------------- | -------------
| /api/v1/landingpage/artikel |  get |

# detailpage
| End Point  		| 	Method |
------------- | -------------
| /api/v1/detailpage/artikel/:id |  get |

# payment
| End Point  		| 	Method | 
------------- | -------------
| /api/v1/payment/ |  post|
