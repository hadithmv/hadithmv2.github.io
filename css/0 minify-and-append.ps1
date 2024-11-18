# Set the working directory to the script's location
Set-Location -Path $PSScriptRoot

# Function to minify and create temporary content
function Get-Minified-Content {
    param (
        [string]$sourceFile
    )
    
    $minifiedFile = [System.IO.Path]::GetFileNameWithoutExtension($sourceFile) + ".temp.min.css"
    
    csso $sourceFile -o $minifiedFile
    $minifiedContent = Get-Content -Path $minifiedFile -Raw
    Remove-Item -Path $minifiedFile
    return $minifiedContent.Trim()
}

# Files to process for DT-COMB.min.css
$combFiles = @(
    #"DT-inline.css"
)

# Files to minify separately
$separateFiles = @(
    "base-styles.css",
    "navbar.css",
    "DT-inline.css",
    "quran-navigation-list.css"
)

# Read the entire content of DT-COMB.min.css
$allContent = Get-Content -Path "DT-COMB.min.css" -Raw

# Process files for DT-COMB.min.css
foreach ($file in $combFiles) {
    Write-Output "Processing: $file"
    
    # Create the exact header pattern that exists in the file
    $headerPattern = "/* $file */"
    
    # Check if this header exists in the content
    if ($allContent -match [regex]::Escape($headerPattern)) {
        Write-Output "Found section for: $file"
        
        # Get the new minified content
        $newContent = Get-Minified-Content -sourceFile $file
        
        # Pattern to match the whole section (header + content until next header or end)
        $pattern = "(?ms)/\* $file \*/\r?\n.*?(?=(/\* .*?\*/\r?\n|\z))"
        
        # Create replacement with preserved header and blank line after code block
        $replacement = "/* $file */`n$newContent`n`n"
        
        # Replace the section
        $allContent = [regex]::Replace($allContent, $pattern, $replacement)
    }
    else {
        Write-Output "Warning: Section not found for $file"
    }
}

# Process files that need separate minification
foreach ($file in $separateFiles) {
    Write-Output "Processing separately: $file"
    $minifiedFile = [System.IO.Path]::GetFileNameWithoutExtension($file) + ".min.css"
    csso $file -o $minifiedFile
    Write-Output "Created: $minifiedFile"
}

# Remove any potential multiple blank lines at the end of the file
$allContent = $allContent -replace "`n{3,}$", "`n`n"

# Write the updated content back to the file
Set-Content -Path "DT-COMB.min.css" -Value $allContent -NoNewline
Write-Output "✅ -- ✅ -- DONE -- ✅ -- ✅"

<# claude:
write powershell script to

in this folder
Set-Location -Path $PSScriptRoot

there is are css files

one of them is called
DT-COMB.min.css
clear the content of that file

then in the folder there is another file called
comb-DT.min.css
copy the content of this file, and place it into DT-COMB.min.css

then there is another file called dt-inline.css
minify its content with csso:
csso [file] -o [file]

and place the content at the end of DT-COMB.min.css, after a new line and a commented out line that says "dt-inline.css"

then in the folder there is another file called
navbar.css
minify its content with csso
and place the content at the end of DT-COMB.min.css, after a new line and a commented out line that says "navbar.css"

print what you do
#>