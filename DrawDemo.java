import javax.swing.*;
import java.awt.*;
import java.awt.Color.*;
class MyPanel extends JPanel {
    @Override
    protected void paintComponent(Graphics g) {
        super.paintComponent(g);

        g.setColor(Color.RED);
        g.fillOval(50, 50, 100, 100);   // Draw a filled circle
    }
}

public class DrawDemo {
    public static void main(String[] args) {
        JFrame f = new JFrame("Draw Example");
        f.setSize(400, 400);
        f.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        f.add(new MyPanel());
        f.setVisible(true);
    }
}
