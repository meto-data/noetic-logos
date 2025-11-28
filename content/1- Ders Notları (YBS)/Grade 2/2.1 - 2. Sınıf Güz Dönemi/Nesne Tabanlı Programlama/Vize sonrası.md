```csharp
txtAd.TextChanged += txtAd_TextChanged;
txtYas.TextChanged += txtYas_TextChanged;
txtEposta.TextChanged += txtEposta_TextChanged;

button1.Click += button1_TexetChanged;


private void txtAd_TextChanged(object? sender, EventArgs){
ValidateAd();
}

private void txtYas_TextChanged(object? sender, EventArgs){
ValidateYas();
}

private void txtEposta_TextChanged(object? sender, EventArgs){
ValidateEmail();
}

private void SetError(Label lbl, string message){

}

private void ClearError (Label lbl){
lbl.Text = "";
lbl.Visible = false;
}

private bool ValidateAd(){
	
	if(string.isNullOrWhiteSpace(txtAd.Text)){
		SetError(lblAdError, "Adınızı boş bırakamazsınız.);
		return false;
	}
	if(txtAd.Text.Length>2){
		SetError(lblAdError, "Adınız 2 karakterden kısa olamaz.)
		return false;
		}
	
ClearError(lblAdError); 
return true;

}

private bool ValidateYas(){
	if (!int.TryParse(txtYas.Text, out int yas)){
		SetError(lblYasError, "Yaş değerinin gayri-sayısal olması aklen muhal.");
		return false;
	}
	if(yas <18 || yas > 80){
		SetError(lblYasError, "Yaşınız bu kadar küçük yahut büyük olamaz.");
		return false;
	}
	ClearError(lblYasError);
	return true;
	
}

private bool ValidateEmail(){
	string email = txtEposta.Text.Trim();
	string pattern = @"^[^@\s]+[^@\s]+\.[^@\s]+$"
}

```


