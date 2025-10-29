#!/bin/bash

# VISIBI Complete File Export Script
# This script outputs all files in a format that can be easily copied to local computer

echo "╔════════════════════════════════════════════════════════════╗"
echo "║     VISIBI COMPLETE FILE EXPORT - COPY ALL OUTPUT BELOW    ║"
echo "╚════════════════════════════════════════════════════════════╝"
echo ""
echo "INSTRUCTIONS:"
echo "1. Copy this ENTIRE output (from START to END marker)"
echo "2. Save it to a file called 'visibi-export.txt' on your local computer"
echo "3. Run the extraction script (provided at the end)"
echo ""
echo "════════════════════════════════════════════════════════════"
echo "START_OF_EXPORT"
echo "════════════════════════════════════════════════════════════"

# Function to encode file content
export_file() {
  local filepath="$1"
  if [ -f "$filepath" ]; then
    echo ""
    echo ">>>FILE: $filepath"
    cat "$filepath"
    echo ""
    echo "<<<ENDFILE: $filepath"
  fi
}

# Export all configuration files
export_file "package.json"
export_file "vite.config.ts"
export_file "tsconfig.json"
export_file "tsconfig.node.json"
export_file "postcss.config.js"
export_file "index.html"
export_file "main.tsx"
export_file "App.tsx"
export_file "README.md"
export_file "Attributions.md"

# Export styles
export_file "styles/globals.css"

# Export guidelines
export_file "guidelines/Guidelines.md"

# Export main components
export_file "components/Layout.tsx"
export_file "components/CTABanner.tsx"
export_file "components/FAQSection.tsx"
export_file "components/ServiceCard.tsx"

# Export figma components
export_file "components/figma/ImageWithFallback.tsx"

# Export page components
export_file "components/pages/HomePage.tsx"
export_file "components/pages/ServicesPage.tsx"
export_file "components/pages/GEOPage.tsx"
export_file "components/pages/SEOPage.tsx"
export_file "components/pages/PPCPage.tsx"
export_file "components/pages/ToolPage.tsx"
export_file "components/pages/HowWeWorkPage.tsx"
export_file "components/pages/AboutPage.tsx"
export_file "components/pages/InsightsPage.tsx"
export_file "components/pages/ContactPage.tsx"

# Export UI components
export_file "components/ui/utils.ts"
export_file "components/ui/use-mobile.ts"
export_file "components/ui/accordion.tsx"
export_file "components/ui/alert-dialog.tsx"
export_file "components/ui/alert.tsx"
export_file "components/ui/aspect-ratio.tsx"
export_file "components/ui/avatar.tsx"
export_file "components/ui/badge.tsx"
export_file "components/ui/breadcrumb.tsx"
export_file "components/ui/button.tsx"
export_file "components/ui/calendar.tsx"
export_file "components/ui/card.tsx"
export_file "components/ui/carousel.tsx"
export_file "components/ui/chart.tsx"
export_file "components/ui/checkbox.tsx"
export_file "components/ui/collapsible.tsx"
export_file "components/ui/command.tsx"
export_file "components/ui/context-menu.tsx"
export_file "components/ui/dialog.tsx"
export_file "components/ui/drawer.tsx"
export_file "components/ui/dropdown-menu.tsx"
export_file "components/ui/form.tsx"
export_file "components/ui/hover-card.tsx"
export_file "components/ui/input-otp.tsx"
export_file "components/ui/input.tsx"
export_file "components/ui/label.tsx"
export_file "components/ui/menubar.tsx"
export_file "components/ui/navigation-menu.tsx"
export_file "components/ui/pagination.tsx"
export_file "components/ui/popover.tsx"
export_file "components/ui/progress.tsx"
export_file "components/ui/radio-group.tsx"
export_file "components/ui/resizable.tsx"
export_file "components/ui/scroll-area.tsx"
export_file "components/ui/select.tsx"
export_file "components/ui/separator.tsx"
export_file "components/ui/sheet.tsx"
export_file "components/ui/sidebar.tsx"
export_file "components/ui/skeleton.tsx"
export_file "components/ui/slider.tsx"
export_file "components/ui/sonner.tsx"
export_file "components/ui/switch.tsx"
export_file "components/ui/table.tsx"
export_file "components/ui/tabs.tsx"
export_file "components/ui/textarea.tsx"
export_file "components/ui/toggle-group.tsx"
export_file "components/ui/toggle.tsx"
export_file "components/ui/tooltip.tsx"

echo ""
echo "════════════════════════════════════════════════════════════"
echo "END_OF_EXPORT"
echo "════════════════════════════════════════════════════════════"
echo ""
echo "✅ Export complete! Now copy everything above to your local computer."
echo ""
echo "NEXT STEPS:"
echo "1. Copy ALL output from 'START_OF_EXPORT' to 'END_OF_EXPORT'"
echo "2. Save to ~/Downloads/visibi-export.txt"
echo "3. Run the extraction script below on your LOCAL computer"
echo ""
echo "════════════════════════════════════════════════════════════"
echo "LOCAL EXTRACTION SCRIPT (Run on your LOCAL computer)"
echo "════════════════════════════════════════════════════════════"
cat << 'EXTRACTION_SCRIPT'
#!/bin/bash
# Save this as extract-visibi.sh and run: bash extract-visibi.sh visibi-export.txt

EXPORT_FILE="$1"

if [ -z "$EXPORT_FILE" ] || [ ! -f "$EXPORT_FILE" ]; then
  echo "Usage: bash extract-visibi.sh visibi-export.txt"
  exit 1
fi

echo "Extracting VISIBI files to: ~/projects/AgencyVISIBI"
mkdir -p ~/projects/AgencyVISIBI
cd ~/projects/AgencyVISIBI

# Create directory structure
mkdir -p components/pages components/ui components/figma styles guidelines

# Parse and extract files
current_file=""
in_file=false

while IFS= read -r line; do
  if [[ "$line" =~ ^\>\>\>FILE:\ (.+)$ ]]; then
    current_file="${BASH_REMATCH[1]}"
    in_file=true
    echo "Creating: $current_file"
    > "$current_file"  # Create empty file
  elif [[ "$line" =~ ^\<\<\<ENDFILE:\ (.+)$ ]]; then
    in_file=false
    current_file=""
  elif [ "$in_file" = true ] && [ -n "$current_file" ]; then
    echo "$line" >> "$current_file"
  fi
done < "$EXPORT_FILE"

# Create .gitignore
cat > .gitignore << 'GITIGNORE_END'
node_modules/
dist/
.env
.DS_Store
*.log
GITIGNORE_END

echo ""
echo "✅ All files extracted to ~/projects/AgencyVISIBI"
echo ""
echo "NEXT STEPS:"
echo "1. cd ~/projects/AgencyVISIBI"
echo "2. npm install"
echo "3. npm run dev"
echo ""
echo "Then push to GitHub:"
echo "1. git init"
echo "2. git add ."
echo "3. git commit -m 'Initial commit: Complete VISIBI website'"
echo "4. git remote add origin https://github.com/Adnan-hka/AgencyVISIBI.git"
echo "5. git branch -M main"
echo "6. git push -u origin main"

EXTRACTION_SCRIPT

echo "════════════════════════════════════════════════════════════"
