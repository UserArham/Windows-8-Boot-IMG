@GetMapping("/Windows 8 Build 8133.img")
public ResponseEntity<Resource> getImg() {
    FileSystemResource img = new FileSystemResource("Windows 8 Build 8133.img");
    return ResponseEntity.ok()
        .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=windows8.img")
        .contentType(MediaType.APPLICATION_OCTET_STREAM)
        .body(img);
}
